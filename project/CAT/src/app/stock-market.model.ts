import {CompanyModel} from './company.model';

import * as amexData   from '../assets/companylist/companylist-AMEX.json';
import * as nyseData   from '../assets/companylist/companylist-NYSE.json';
import * as nasdaqData from '../assets/companylist/companylist-NASDAQ.json';

export class StockMarketModel {

  static amexExchange   : CompanyModel[] = StockMarketModel.grabAmexExchange();
  static nyseExchange   : CompanyModel[] = StockMarketModel.grabNyseExchange();
  static nasdaqExchange : CompanyModel[] = StockMarketModel.grabNasdaqExchange();

  exampleCompany : CompanyModel;
  isLoaded : boolean;

  constructor() {
    // this.update();
    this.exampleCompany = StockMarketModel.amexExchange[0];
    this.isLoaded = false;
  }

  getCollectiveMarket() {
    return StockMarketModel.amexExchange.concat(StockMarketModel.nyseExchange).concat(StockMarketModel.nasdaqExchange);
  }

  getAmexExchange() {
    return StockMarketModel.amexExchange;
  }

  getNyseExchange() {
    return StockMarketModel.nyseExchange;
  }

  getNasdaqExchange() {
    return StockMarketModel.nasdaqExchange;
  }

  static grabAmexExchange() : CompanyModel[] {
    let temp = [];
    for (let i = 0; i < 1; i++) {
      temp.push(new CompanyModel(amexData[i]))
    }
    return temp;
    // this.amexExchange = temp;
  }

  static grabNyseExchange() : CompanyModel[] {
    let temp = [];
    for (let i = 0; i < 1; i++) {
      temp.push(new CompanyModel(nyseData[i]))
    }
    return temp;
    // this.nyseExchange = temp;
  }

  static grabNasdaqExchange() : CompanyModel[] {
    let temp = [];
    for (let i = 0; i < 1; i++) {
      temp.push(new CompanyModel(nasdaqData[i]))
    }
    return temp;
    // this.nasdaqExchange = temp;
  }

  update() {
    StockMarketModel.grabAmexExchange();
    StockMarketModel.grabNasdaqExchange();
    StockMarketModel.grabNyseExchange();
  }
}
