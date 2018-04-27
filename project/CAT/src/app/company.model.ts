import {Stock} from "./Stock.model";

export class CompanyModel {

  // stock        : Stock;
  // symbol       : string;
  // name         : string;
  // marketCap    : string;
  // ipoYear      : string;
  // sector       : string;
  // industry     : string;
  // summaryQuote : string;
  // lastSale     : number;

  CEO         : string;
  name        : string;
  description : string;
  exchange    : string;
  industry    : string;
  issueType   : string;
  sector      : string;
  symbol      : string;
  website     : string;
  stock       : Stock;

  // constructor(jsonFeed: any) {
  //   this.symbol       = (<any> jsonFeed).Symbol;
  //   this.name         = (<any> jsonFeed).Name;
  //   this.lastSale     = (<any> jsonFeed).LastSale;
  //   this.marketCap    = (<any> jsonFeed).MarketCap;
  //   this.ipoYear      = (<any> jsonFeed).IPOyear;
  //   this.sector       = (<any> jsonFeed).Sector;
  //   this.industry     = (<any> jsonFeed).industry;
  //   this.summaryQuote = (<any> jsonFeed).SummaryQuote;
  //   this.stock        = new Stock(this.symbol);
  // }

  constructor(jsonFeed: any) {
    this.CEO         = (<any> jsonFeed).CEO;
    this.name        = (<any> jsonFeed).name;
    this.description = (<any> jsonFeed).description;
    this.exchange    = (<any> jsonFeed).exchange;
    this.industry    = (<any> jsonFeed).industry;
    this.issueType   = (<any> jsonFeed).issueType;
    this.sector      = (<any> jsonFeed).sector;
    this.symbol      = (<any> jsonFeed).symbol;
    this.website     = (<any> jsonFeed).website;
    this.stock       = null;
  }

  setStock(stock: Stock) {
    this.stock = stock;
  }


  // stock        : Stock;
  // symbol       : string;
  // name         : string;
  // marketCap    : string;
  // ipoYear      : string;
  // sector       : string;
  // industry     : string;
  // summaryQuote : string;
  // lastSale     : number;
  //
  // constructor(jsonFeed: any) {
  //   this.symbol       = (<any> jsonFeed).Symbol;
  //   this.name         = (<any> jsonFeed).Name;
  //   this.lastSale     = (<any> jsonFeed).LastSale;
  //   this.marketCap    = (<any> jsonFeed).MarketCap;
  //   this.ipoYear      = (<any> jsonFeed).IPOyear;
  //   this.sector       = (<any> jsonFeed).Sector;
  //   this.industry     = (<any> jsonFeed).industry;
  //   this.summaryQuote = (<any> jsonFeed).SummaryQuote;
  //   this.stock        = new Stock(this.symbol);
  // }



}
