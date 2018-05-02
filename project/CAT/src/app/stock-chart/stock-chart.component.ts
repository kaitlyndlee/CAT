import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as Chart from 'chart.js';
import {StockMarketService} from "../stock-market.service";

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements AfterViewInit {

  canvas: any;
  ctx: any;
  colors: string[] = ['rgba(0, 255, 0, .5)', 'rgba(0, 0, 255,.5)','rgba(192,192,192,1)',  'rgba(255, 0 ,0,.5)'];
  titles = ["Market Low","Market Open", "Market Close", "Market High"];
  myChart;
  symbol: string = StockMarketService.selectedCompany.symbol;

  constructor() {

  }

  changeColor(index: number, color: string) {
    console.log("COlor: " + color);
    let rgb = this.hexToRgb(color);
    let rgbaColor = 'rgba(' + rgb.r + "," + rgb.g + "," + rgb.b + ", 0.1)";
    console.log("Rgba color: " + rgbaColor);
    this.colors[index] = rgbaColor;
    this.setTimeframe("1m");

  }

  setTimeframe(value : string) {
    let interval;
    switch(value) {
      case '1d':
        break;
      case '1m':
        break;
      case '3m':
        break;
      case '6m':
        break;
      case 'ytd':
        break;
      case '1y':
        break;
      case '2y':
        break;
      case '5y':
        break;
    }
    StockMarketService.getCompanyStock(this.symbol, value).then(data => {
      this.updateChart(data);
    })
  }

  updateChart(chart: any) {
    this.canvas = document.getElementById("chart");
    this.ctx = this.canvas.getContext('2d');
    console.log("Chart");
    console.log(chart);
    let labels = [];
    let openData  = [];
    let closeData = [];
    let highData  = [];
    let lowData   = [];
    let values = [lowData, openData, closeData, highData];

    for (let value of chart) {
      if (value["label"]) labels.push(value["label"]);
      if (value["open"]&& value["open"] != -1) openData.push(value["open"]);
      if (value["close"] && value["close"] != -1) closeData.push(value["close"]);
      if (value["high"]&& value["high"] != -1) highData.push(value["high"]);
      if (value["low"]&& value["low"] != -1) lowData.push(value["low"]);
    }

    let datasets = [];

    for ( let i = 0; i < values.length; i++ ) {
      let data = {
        label: this.titles[i],
        data: values[i],
        backgroundColor: [
          this.colors[i]
        ],
        borderColor: [
          this.colors[i]
        ],
        borderWidth: 1
      };
      datasets.push(data);
    }


    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });
  }

  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  ngAfterViewInit(): void {
    for (let i = 0; i < this.titles.length; i++) {
      let colorchanger :any = document.getElementById(i.toString());
      if (colorchanger) {
        console.log("Color changer found");
      }
      else {
        console.log("Not found");
      }
      // colorchanger.addEventListener("click", this.changeColor(i, colorchanger.value), false);
    }
    this.setTimeframe("1m");
  }

}
