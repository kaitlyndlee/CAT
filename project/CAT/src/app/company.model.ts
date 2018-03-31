import {Stock} from "./Stock.model";

export class CompanyModel {

  stock        : Stock;
  symbol       : string;
  name         : string;
  marketCap    : string;
  ipoYear      : string;
  sector       : string;
  industry     : string;
  summaryQuote : string;
  lastSale     : number;

  constructor(jsonFeed: any) {
    this.symbol       = (<any> jsonFeed).Symbol;
    this.name         = (<any> jsonFeed).Name;
    this.lastSale     = (<any> jsonFeed).LastSale;
    this.marketCap    = (<any> jsonFeed).MarketCap;
    this.ipoYear      = (<any> jsonFeed).IPOyear;
    this.sector       = (<any> jsonFeed).Sector;
    this.industry     = (<any> jsonFeed).industry;
    this.summaryQuote = (<any> jsonFeed).SummaryQuote;
    this.stock        = new Stock(this.symbol);
  }
}
