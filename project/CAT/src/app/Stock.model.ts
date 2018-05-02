import {AlphaVantageAPI} from "alpha-vantage-cli";

var ALPHA_VANTAGE_KEY = '1I4DFBMCFGHXCYBI';
import { IEXClient } from 'iex-api'
import * as _fetch from 'isomorphic-fetch'
import {ChartRangeOption} from "iex-api/apis/stocks";

const iex = new IEXClient(_fetch)



// var av = new AlphaVantageAPI(ALPHA_VANTAGE_KEY, 'compact', true);

export class Stock {

  quote: any;
  news : any;
  chart: any;
  peers: any;
  loaded: boolean;

  constructor(private stockSymbol: string) {
    this.loaded = false;
    this.refresh();
  }

  isLoaded() {
    return this.loaded;
  }

  getSymbol() {
    return this.stockSymbol;
  }

  refresh() {
    iex.request("/stock/" + this.stockSymbol + "/batch?types=peers,quote,news,chart&range=1m&last=10").then(data => {
      if(!data) {
        console.log("BAD DATA DETECTED");
        console.log(data);
        return;
      }
      console.log(data);

      this.quote = data.quote;
      this.news  = data.news;
      this.chart = data.chart;
      this.peers = data.peers;
      this.loaded = true;
    });
  }
}
