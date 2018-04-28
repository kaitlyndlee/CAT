import {Component, Input, OnInit} from '@angular/core';
import {Stock} from '../Stock.model';
import {StockMarketModel} from '../stock-market.model';
import {StockMarketService} from '../stock-market.service';
import {AuthService} from "../auth.service";
import {CompanyModel} from "../company.model";
// import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-stocks-page',
  templateUrl: './stocks-page.component.html',
  styleUrls: ['./stocks-page.component.css']
})



export class StocksPageComponent implements OnInit {

  static selectedCompany: CompanyModel;
  static stockArray : CompanyModel[];
  constructor(private stockMarket: StockMarketService, private authService: AuthService) {
    StocksPageComponent.stockArray = stockMarket.getStockArray();
    StocksPageComponent.selectedCompany = stockMarket.getStockArray()[0];
  }

  ngOnInit() {}

  getSelectedCompany() : CompanyModel {
    return StocksPageComponent.selectedCompany;
  }

  static selectStockByTicker(ticker: string) {
    console.log("Ticker: " + ticker);
    console.log(StocksPageComponent.stockArray);
    for (let item of StocksPageComponent.stockArray) {
      console.log("Checking item: ");
      console.log(item);
      if (item.symbol == ticker) {

        StocksPageComponent.selectedCompany = item;
        break;
      }
    }
  }
  getStockArray() {
    return this.stockMarket.getStockArray();
  }

  getStockMarket() {
    return this.stockMarket.getStockMarket();
  }

  addToFavorite(company: CompanyModel) {
    this.authService.addStockToFave(company);
  }
}
