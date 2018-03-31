import {AlphaVantageAPI} from "alpha-vantage-cli";

var ALPHA_VANTAGE_KEY = '1I4DFBMCFGHXCYBI';
var av = new AlphaVantageAPI(ALPHA_VANTAGE_KEY, 'compact', true);

export class Stock {

  interval    : string;
  dailyLoaded : boolean;
  intraLoaded : boolean;
  daily       : StockData[] = [];
  intraday    : StockData[] = [];

  constructor(private stockSymbol: string) {
    this.interval    = "15";
    this.dailyLoaded = false;
    this.intraLoaded = false;
    this.update();
  }

  getDaily() : StockData[] {
    return this.daily;
  }

  getSymbol() {
    return this.stockSymbol;
  }

  getIntraday() : StockData[] {
    return this.intraday;
  }

  getInterval() : string {
    return this.interval;
  }

  setInterval(interval: string) {
    this.interval = interval;
    this.grabIntradayData();
  }

  private grabDaily() {
    this.dailyLoaded = false;
    av.getDailyData(this.stockSymbol).then(dailyData => {

      let i;
      this.daily = [];
      for (i = 0; i < dailyData.length; i++) {
        this.daily.push(new StockData(dailyData[i]));
      }
      this.dailyLoaded = true;
    })
      .catch(err => {
        console.error(err);
      });
  }

  private grabIntradayData() {
    this.intraLoaded = false;
    av.getIntradayData(this.stockSymbol, this.interval).then(intradayData => {

        let i;
        this.intraday = [];
        for (i = 0; i < intradayData.length; i++) {
          this.intraday.push(new StockData(intradayData[i]));
        }
        this.intraLoaded = true;
    })
      .catch(err => {
        console.error(err);
      });
  }

  update() {
    this.grabDaily();
    // this.grabIntradayData();
  }
}


export class StockData {
  timestamp: string;
  close:     number;
  high:      number;
  low:       number;
  open:      number;
  volume:    number;

  constructor(private jsonFeed: any){
    this.timestamp = jsonFeed.Timestamp;
    this.close     = jsonFeed.Close;
    this.high      = jsonFeed.High;
    this.low       = jsonFeed.Low;
    this.open      = jsonFeed.Open;
    this.volume    = jsonFeed.Volume;
  }

  getDifference() : string {
    return (this.close - this.open).toFixed(2);
  }

  getPercent() : string {
    return (( (this.open - this.close) / this.close ) * 100 ).toFixed(2);
  }
}
