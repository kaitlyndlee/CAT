import { Injectable } from '@angular/core';
import {CompanyModel} from './company.model';

import {StockMarketModel} from './stock-market.model';
import { IEXClient } from 'iex-api'
import * as _fetch from 'isomorphic-fetch'

const iex = new IEXClient(_fetch);

@Injectable()
export class StockMarketService {

  private stockMarketArray: CompanyModel[];
  private stockMarket: StockMarketModel;

  static selectedCompany : CompanyModel;


  // static amexExchange   : CompanyModel[] = StockMarketModel.grabAmexExchange();
  // static nyseExchange   : CompanyModel[] = StockMarketModel.grabNyseExchange();
  // static nasdaqExchange : CompanyModel[] = StockMarketModel.grabNasdaqExchange();
  static amexExchange   : CompanyModel[] = [];
  static nyseExchange   : CompanyModel[] = [];
  static nasdaqExchange : CompanyModel[] = [];

  static companies : CompanyModel[] = [];

  static symbols : string[] = [];

  constructor() {
    // this.stockMarket = new StockMarketModel();
    // this.stockMarketArray = this.stockMarket.getCollectiveMarket();

    StockMarketService.fetchData();

  }

  static createCompany(symbol: string) {
    iex.stockCompany(symbol).then(companyData => {
      this.symbols.push(symbol);
      iex.stockNews(symbol);
      // console.log(companyData);
      this.companies.push( new CompanyModel(companyData) );
    })
      .catch(reason => {
        console.log(reason);
      });
  }

  static createStock(symbol: string) {

  }

  static createMarket(data: any) {
    let i = 0;


    for( let company of data ) {
      // console.log(company);
      console.log(iex.stockChart(company.symbol, "1d"));
      StockMarketService.createCompany(company.symbol);
      if (i > 100) {
        break;
      }
      i++;
    }

    console.log(this.companies);
  }

  static fetchData() {
    iex.symbols().then(data => {
      // console.log(data);
      this.createMarket(data);
      // return data;
    });

  }

  getStockArray() {
    return this.stockMarketArray;
  }

  getStockMarket() {
    return this.stockMarket;
  }

}
