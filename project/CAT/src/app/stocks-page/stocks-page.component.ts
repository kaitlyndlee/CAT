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

  constructor(private stockMarket: StockMarketService, private authService: AuthService) {
    StocksPageComponent.selectedCompany = stockMarket.getStockArray()[0];
  }

  ngOnInit() {}

  getSelectedCompany() : CompanyModel {
    return StocksPageComponent.selectedCompany;
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
