import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

interface User {
  uid: string;
  email: string;
  displayName?: string;
}

interface Stock {
  name: string;
}

@Injectable()
export class AuthService {
  private user: Observable<User>;
  private stockCollection: AngularFirestoreCollection<Stock>;
  stocks: Observable<Stock[]>;
  private authState: any;
  userID: string = null;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      });

    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          this.userID = user.uid;
          this.stockCollection = afs.collection<Stock>(`users/${user.uid}/stocks`);
          this.stocks = this.stockCollection.valueChanges();
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
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
        console.log('Success', value);
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
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  private updateUserData(user) {
    // Sets user data to Firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true });
  }

  public isLoggedIn () {
    return this.authState !== null;
  }

  getUserStocks() {
    return this.stocks;
  }

  addStockToFave(name) {
    // Create a path in Firestore to add our new stock
    const stockRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.userID}/stocks/${name}`);

    // Create the Stock object to add to Firestore
    const newStock: Stock = {
      name: name,
    };

    // Set the data in Firestore
    return stockRef.set(newStock);
  }
}
