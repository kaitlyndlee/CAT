import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import {CompanyModel} from "./company.model";
import {StockMarketService} from "./stock-market.service";
import {async} from "@angular/core/testing";

interface User {
  uid: string;
  email: string;
  displayName?: string;
}

interface Stock {
  symbol: string;
  name:   string;
}

@Injectable()
export class AuthService {
   user: Observable<User>;
   stockCollection: AngularFirestoreCollection<Stock>;
   stocks: any;
   authState: any;
   userID: string;
   displayName: string;
   email: string;
   favoritedCompanies : CompanyModel[] = [];

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
          this.stockCollection = afs.collection<Stock>(`users/${user.uid}/stocks`);
          this.stocks = this.stockCollection.valueChanges();
          this.userID = user.uid;
          this.displayName =  user.displayName;
          this.email = user.email;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else {
          return Observable.of(null);
        }
      });
  }

  //   login(email: string, password: string) {
  //   this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //     .then(value => {
  //       console.log('Nice, it worked!');
  //       this.router.navigateByUrl('/profile');
  //     })
  //     .catch(err => {
  //       console.log('Something went wrong: ', err.message);
  //     });
  // }
  //
  // emailSignup(email: string, password: string) {
  //   this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //     .then(value => {
  //       console.log('Success', value);
  //       this.router.navigateByUrl('/profile');
  //     })
  //     .catch(error => {
  //       console.log('Something went wrong: ', error);
  //     });
  // }

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
      if (this.router.url === '/mypage') {
        this.router.navigate(['/']);
      }
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

  addStockToFave(company: CompanyModel) {
    // Create a path in Firestore to add our new stock
    const name = company.name;
    const symbol = company.symbol;
    const stockRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.userID}/stocks/${name}`);

    // Create the Stock object to add to Firestore
    const newStock: Stock = {
      symbol: symbol,
      name  : name
    };

    // Set the data in Firestore
    return stockRef.set(newStock);
  }

  getName() {
    return this.displayName;
  }

  getEmail() {
    return this.email;
  }

  getID() {
    return this.userID;
  }

  getUserStocks() {
    return this.stocks;
  }
}
