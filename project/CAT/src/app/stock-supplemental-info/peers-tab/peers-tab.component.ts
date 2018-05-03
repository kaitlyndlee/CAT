import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../../company.model";
import {StockMarketService} from "../../stock-market.service";
import * as Chart from 'chart.js';

@Component({
  selector: 'app-peers-tab',
  templateUrl: './peers-tab.component.html',
  styleUrls: ['./peers-tab.component.css']
})
export class PeersTabComponent implements AfterViewInit {

  @Input() company : CompanyModel;

  canvas: any;
  ctx: any;
  myChart : any;
  tableData : any[];
  rowData : any[];
  colors: string[] = ['rgba(0, 255, 0, .5)', 'rgba(192,192,192,.5)','rgba(192,192,192,.5)',  'rgba(192,192,192,.5)'];
  headerData : string[];

  peers : CompanyModel[];
  constructor() {

  }

  grabPeers() {

      StockMarketService.createCompaniesFromList(this.company.getStock().peers).then(companies => {
        console.log("companies");
        console.log(companies);
        this.peers = companies;
        this.loadData();
      });
  }

  async loadData() {

    console.log("Should have awaited");
    console.log(this.peers);
    this.headerData = [];
    this.rowData = [];
    let fields = ["Change (%)", "Last", "High", "Low", "Volume", "Market Cap", "52 Week High", "52 Week Low"];
    let datasets = [];
    for ( let i = 0; i < this.peers.length; i++) {
      let values = [];
      let company = this.peers[i];
      // if (!company) continue;

      await company.refresh().then(() => {
        this.headerData.push(fields[i]);
        values.push(company.getStock().quote.changePercent * 100);
        values.push(company.getStock().quote.latestPrice);
        values.push(company.getStock().quote.high);
        values.push(company.getStock().quote.low);
        values.push(company.getStock().quote.volume);
        values.push(company.getStock().quote.marketCap);
        values.push(company.getStock().quote.week52High);
        values.push(company.getStock().quote.week52Low);
        this.rowData[i] = values.slice();
        this.rowData[i].unshift(company.symbol);
        let data = {
          label: company.symbol,
          data: values,
          backgroundColor: [
            this.colors[i],
            this.colors[i],
            this.colors[i],
            this.colors[i],
            this.colors[i],
            this.colors[i],
            this.colors[i],
            this.colors[i],

          ],
          borderColor: [
            this.colors[i]
          ],
          borderWidth: 2
        };
        datasets.push(data)
      });
    }
    // this.headerData.unshift("Peers");
    this.updateChart(fields, datasets);

  }

    updateChart(labels : any, datasets: any) {

    this.myChart.data.datasets.push(datasets);
    this.myChart.data.labels.push(labels);
    this.myChart.update();
  }

  isPositive(value : number) : boolean {
    return value > 0;
  }
  isNegative(value : number) : boolean {
    return value < 0;
  }
  isNeutral(value : number) : boolean {
    return value == 0;
  }


  format(value : number) {
    if (!value) return "None";
    let formatted = value.toLocaleString();
    if (value > 1000000000 || value < -1000000000) {
      formatted = (value / 1000000000) + "B";
    }
    else if (value > 1000000 || value < -1000000) {
      formatted = (value / 1000000) + "M";
    }
    return formatted;
  }

  createChart(type : string = "line") {
    this.canvas = document.getElementById("chart3");
    this.ctx = this.canvas.getContext('2d');
    if (this.myChart) this.myChart.destroy();
    this.myChart = new Chart(this.ctx, {
      type: type,
      data: {
        labels: [],
        datasets: []
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{

            ticks: {
              beginAtZero: false,

            }
          }],

        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.createChart();
    this.grabPeers();

  }
}
