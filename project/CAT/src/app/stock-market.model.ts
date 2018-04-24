import {CompanyModel} from './company.model';

import * as amexData   from '../assets/companylist/companylist-AMEX.json';
import * as nyseData   from '../assets/companylist/companylist-NYSE.json';
import * as nasdaqData from '../assets/companylist/companylist-NASDAQ.json';

export class StockMarketModel {

  amexExchange   : CompanyModel[] = [];
  nyseExchange   : CompanyModel[] = [];
  nasdaqExchange : CompanyModel[] = [];

  exampleCompany : CompanyModel;
  isLoaded : boolean;

  constructor() {
    this.update();
    this.exampleCompany = this.amexExchange[0];
    this.isLoaded = false;
  }

  getCollectiveMarket() {
    return this.amexExchange.concat(this.nyseExchange).concat(this.nasdaqExchange);
  }

  getAmexExchange() {
    return this.amexExchange;
  }

  getNyseExchange() {
    return this.nyseExchange;
  }

  getNasdaqExchange() {
    return this.nasdaqExchange;
  }

  private grabAmexExchange() {
    let temp = [];
    for (let i = 0; i < 1; i++) {
      temp.push(new CompanyModel(amexData[i]))
    }
    this.amexExchange = temp;
  }

  private grabNyseExchange() {
    let temp = [];
    for (let i = 0; i < 1; i++) {
      temp.push(new CompanyModel(nyseData[i]))
    }
    this.nyseExchange = temp;
  }

  private grabNasdaqExchange() {
    let temp = [];
    for (let i = 0; i < 1; i++) {
      temp.push(new CompanyModel(nasdaqData[i]))
    }
    this.nasdaqExchange = temp;
  }

  update() {
    this.grabAmexExchange();
    this.grabNasdaqExchange();
    this.grabNyseExchange();
  }
}
