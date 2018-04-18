import {Component, Input, OnInit} from '@angular/core';
import {Stock} from '../Stock.model';
import {StockMarketModel} from '../stock-market.model';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-stocks-page',
  templateUrl: './stocks-page.component.html',
  styleUrls: ['./stocks-page.component.css']
})



export class StocksPageComponent implements OnInit {

  stockMarket: StockMarketModel;
  constructor(public db: DatabaseService) {

  }

  ngOnInit() {
    this.stockMarket = new StockMarketModel();
  }

}
