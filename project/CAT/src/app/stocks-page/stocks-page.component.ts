import {Component, Input, OnInit} from '@angular/core';
import {Stock} from '../Stock.model';
import {StockMarketModel} from '../stock-market.model';
import {StockMarketService} from '../stock-market.service';
// import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-stocks-page',
  templateUrl: './stocks-page.component.html',
  styleUrls: ['./stocks-page.component.css']
})



export class StocksPageComponent implements OnInit {
  constructor(private stockMarket: StockMarketService) {}

  ngOnInit() {}

  getStockArray() {
    return this.stockMarket.getStockArray();
  }

  getStockMarket() {
    return this.stockMarket.getStockMarket();
  }
}
