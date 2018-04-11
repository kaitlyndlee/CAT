import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AuthService } from './auth.service';


interface Stock {
  name: string;
}

@Injectable()
export class DatabaseService {
  private stockCollection: AngularFirestoreCollection<Stock>;
  stocks: Observable<Stock[]>;

  // Grabs stocks stored under a user.
  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.stockCollection = afs.collection<Stock>(`users/${this.authService.userID}/stocks`);
    return this.stocks = this.stockCollection.valueChanges();
  }

}
