import {Component, Input, OnInit} from '@angular/core';
import {Stock} from "../Stock.model";

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  id = 'AngularChart4';
  width = 1200;
  height = 800;
  type = 'line';
  dataFormat = 'json';
  dataSource;

  @Input() stock: Stock;
  constructor() {

  }

  ngOnInit() {

    // console.log("STOCK");
    // console.log(this.stock.getDayData(0).timestamp);
    let data = [];

    for (let i = 0; i < 10; i++) {
      data.push({
        "Label": this.stock.quote.latestTime,
        "value": this.stock.quote.close
      })
    }
    this.dataSource = {
      "chart": {
        "caption": this.stock.getSymbol(),
        "subCaption": "Microsoft Stock",
        "numberprefix": "Price (USD) ",
        "theme": "fint"
      },
      "data": data

    }
  }

}
