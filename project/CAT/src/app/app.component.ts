import {Component, OnInit} from '@angular/core';
import {KeywordReaderComponent} from "./keyword-reader/keyword-reader.component";
import {StockMarketModel} from "./stock-market.model";
import {AuthService} from './auth.service';
import {DatabaseService} from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private jsonreader: KeywordReaderComponent, private  authService: AuthService, private db: DatabaseService) {

  }
  ngOnInit(): void {

  }
}
