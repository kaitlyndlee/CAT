import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

interface User {
  uid: string;
  email: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User>;
  private isloggedIn = false;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          this.isloggedIn = true;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          this.isloggedIn = false;
          return Observable.of(null);
        }
      });
  }

    login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigateByUrl('/profile');
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Sucess', value);
        this.router.navigateByUrl('/profile');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
        console.log('Sucess', value),
          // console.log('The given name is ' + value.additionalUserInfo.profile.given_name),
          this.router.navigateByUrl('/mypage');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  // private oAuthLogin(provider) {
  //   return this.afAuth.auth.signInWithPopup(provider);
  // }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true });

  }

  isLoggedIn () {
    return this.isloggedIn;
  }
}
