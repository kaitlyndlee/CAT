import { Component, OnInit } from '@angular/core';
import {StockMarketService} from "../stock-market.service";

@Component({
  selector: 'app-stocks-main-page',
  templateUrl: './stocks-main-page.component.html',
  styleUrls: ['./stocks-main-page.component.css']
})
export class StocksMainPageComponent implements OnInit {

  active : any = [];
  gainers : any = [];
  losers : any = [];
  percent : any = [];
  volume : any = [];
  constructor() {
    this.getActive();
    this.getGainers();
    this.getLosers();
    this.getPercent();
    this.getVolume();
  }

  getActive() {
    StockMarketService.getActive().then(data => {
      this.active = data;
    });
  }

  format(value : number) {
    return Math.round(value * 1000) / 1000;
  }
  getGainers() {
    StockMarketService.getGainers().then(data => {
      this.gainers = data;
    });
  }

  selectStock(symbol : string) {
    StockMarketService.selectCompany(symbol);
  }

  getLosers() {
    StockMarketService.getLosers().then(data => {
      this.losers = data;
    });
  }

  getPercent() {
    StockMarketService.getPercent().then(data => {
      this.percent = data;
    });
  }

  getVolume() {
    StockMarketService.getVolume().then(data => {
      this.volume = data;
    });
  }
  ngOnInit() {
  }

}
