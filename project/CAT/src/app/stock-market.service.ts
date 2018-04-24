import { Injectable } from '@angular/core';
import {CompanyModel} from './company.model';

import {StockMarketModel} from './stock-market.model';

@Injectable()
export class StockMarketService {

  private stockMarketArray: CompanyModel[];
  private stockMarket: StockMarketModel;

  constructor() {
    this.stockMarket = new StockMarketModel();
    this.stockMarketArray = this.stockMarket.getCollectiveMarket();
  }

  getStockArray() {
    return this.stockMarketArray;
  }

  getStockMarket() {
    return this.stockMarket;
  }

}
