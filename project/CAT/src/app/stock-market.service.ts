import { Injectable } from '@angular/core';
import {CompanyModel} from './company.model';

import {StockMarketModel} from './stock-market.model';

@Injectable()
export class StockMarketService {

  static stockMarketStatic = [];

  private stockMarketArray: CompanyModel[];
  private stockMarket: StockMarketModel;

  constructor() {
    this.stockMarket = new StockMarketModel();
    StockMarketService.stockMarketStatic = this.stockMarketArray;
    this.stockMarketArray = this.stockMarket.getCollectiveMarket();
  }

  static getStockArrayStatic() {
    return this.stockMarketStatic;
  }

  getStockArray() {
    return this.stockMarketArray;
  }

  getStockMarket() {
    return this.stockMarket;
  }

}
