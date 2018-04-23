import {Component, OnInit} from '@angular/core';
import {KeywordReaderComponent} from "./keyword-reader/keyword-reader.component";
import {Router} from '@angular/router';
import {StockMarketModel} from "./stock-market.model";
import {AuthService} from './auth.service';
// import {DatabaseService} from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private jsonreader: KeywordReaderComponent, private  authService: AuthService) {

  }
  ngOnInit(): void {

  }
}
