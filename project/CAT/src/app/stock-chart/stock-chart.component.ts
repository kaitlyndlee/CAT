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
  interval : string;
  colors: string[] = ['rgba(0, 255, 0, .5)', 'rgba(0, 0, 255,.5)','rgba(192,192,192,.5)',  'rgba(255, 0 ,0,.5)'];
  titles = ["Market Low","Market Open", "Market Close", "Market High"];
  myChart;
  symbol: string = StockMarketService.selectedCompany.symbol;

  constructor() {

  }

  changeColor(index: number) {
    let colorPicker : any = document.getElementById(index.toString());
    let rgb = this.hexToRgb(colorPicker.value);
    let rgbaColor = 'rgba(' + rgb.r + "," + rgb.g + "," + rgb.b + ", 0.5)";
    console.log("Rgba color: " + rgbaColor);
    this.colors[index] = rgbaColor;
    console.log(this.colors);
    // this.setTimeframe("1m");
    this.updateChartColor(index);
  }

  updateChartColor(index : number) {

    for (let i = 0; i < this.myChart.data.datasets.length; i++) {
      this.myChart.data.datasets[index].backgroundColor = this.colors[index];
    }
    // this.myChart.data.datasets = datasets;
    // this.myChart.data.labels = labels;
    this.myChart.update();
  }

  setTimeframe(value : string) {
    this.interval = value;
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
      if (this.interval == "1d") {
        let high = value["marketHigh"];
        let low = value["marketLow"];
        if (high != -1) {
          highData.push(value["marketHigh"]);

        }
        if(low != -1) {
          lowData.push(value["marketLow"]);
        }
      }
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

    this.myChart.data.datasets = datasets;
    this.myChart.data.labels = labels;
    this.myChart.update();
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

  toggleBackground(index: number) {

  }

  ngAfterViewInit(): void {

    this.createChart();
    this.setTimeframe("1m");
  }

  createChart() {
    this.canvas = document.getElementById("chart");
    this.ctx = this.canvas.getContext('2d');
    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: []
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
}
