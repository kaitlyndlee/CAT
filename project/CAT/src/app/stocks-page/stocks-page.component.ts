import {Component, Input, OnInit} from '@angular/core';
import {Stock} from "../Stock.model";
import {StockMarketModel} from "../stock-market.model";

@Component({
  selector: 'app-stocks-page',
  templateUrl: './stocks-page.component.html',
  styleUrls: ['./stocks-page.component.css']
})



export class StocksPageComponent implements OnInit {

  @Input() stockMarket : StockMarketModel;
  constructor() {

  }

  ngOnInit() {

  }

}
