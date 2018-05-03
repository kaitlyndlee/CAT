import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../../company.model";
import * as Chart from 'chart.js';

@Component({
  selector: 'app-financials-tab',
  templateUrl: './financials-tab.component.html',
  styleUrls: ['./financials-tab.component.css']
})
export class FinancialsTabComponent implements AfterViewInit {

  @Input() company : CompanyModel;

  canvas: any;
  ctx: any;
  myChart : any;
  tableData : any[];
  rowData : any[];
  colors: string[] = ['rgba(0, 255, 0, .5)', 'rgba(0, 0, 255,.5)','rgba(192,192,192,.5)',  'rgba(255, 0 ,0,.5)'];
  headerData : string[];

  constructor() {

  }

  changeSelection(index : number) {
    let element : any = document.getElementById("optionButton");
    switch(index) {
      case 0:
        element.val = "0";
        element.value = "0";
        element.text = "0";
        this.loadIncomeStatement();
        break;

      case 1:
        this.loadBalanceSheet();
        break;

      case 2:
        this.loadCashFlow();
        break;
    }
  }

  loadIncomeStatement() {
    let quarters = this.company.getStock().financials.financials;
    this.tableData = [];
    this.headerData = [];
    let labels = ["Gross Profit", "Cost of Revenue", "Operating Revenue", "Total Revenue", "Operating Income", "Net Income", "Research & Development", "Operating Expense"];
    this.rowData = labels.slice();
    let datasets = [];
    for ( let i = 0; i < quarters.length; i++ ) {
      let quarter = quarters[i];
      let values = [];
      values.push(quarter.grossProfit);
      values.push(quarter.costOfRevenue);
      values.push(quarter.operatingRevenue);
      values.push(quarter.totalRevenue);
      values.push(quarter.operatingIncome);
      values.push(quarter.netIncome);
      values.push(quarter.researchAndDevelopment);
      values.push(quarter.operatingExpense);
      this.tableData[i] = values.slice();
      this.headerData.unshift(quarter.reportDate);
      let data = {
        label: quarters[i].reportDate,
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
      datasets.push(data);
    }
    this.headerData.unshift("Income Statement");
    this.updateChart(labels, datasets);
  }

  loadBalanceSheet() {
    let quarters = this.company.getStock().financials.financials;
    this.tableData = [];
    this.headerData = [];
    let labels = ["Current Assets", "Total Assets", "Total Liabilities", "Current Cash", "Current Debt", "Total Cash", "Total Debt", "Shareholder Equity"];
    this.rowData = labels.slice();
    let datasets = [];
    for ( let i = 0; i < quarters.length; i++ ) {
      let quarter = quarters[i];
      let values = [];
      values.push(quarter.currentAssets);
      values.push(quarter.totalAssets);
      values.push(quarter.totalLiabilities);
      values.push(quarter.currentCash);
      values.push(quarter.currentDebt);
      values.push(quarter.totalCash);
      values.push(quarter.totalDebt);
      values.push(quarter.shareholderEquity);
      this.headerData.push(quarter.reportDate);
      this.tableData[i] = values.slice();
      let data = {
        label: quarters[i].reportDate,
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
      datasets.push(data);
    }
    this.headerData.unshift("Balance Sheet");
    this.updateChart(labels, datasets);
  }

  loadCashFlow() {
    let quarters = this.company.getStock().financials.financials;
    this.tableData = [];
    this.headerData = [];
    let labels = ["Cash Change", "Cash Flow", "Operating Gains Losses"];
    this.rowData = labels.slice();
    let datasets = [];
    for ( let i = 0; i < quarters.length; i++ ) {
      let quarter = quarters[i];
      let values = [];
      values.push(quarter.grossProfit);
      values.push(quarter.costOfRevenue);
      values.push(quarter.operatingRevenue);
      values.push(quarter.totalRevenue);
      values.push(quarter.operatingIncome);
      values.push(quarter.netIncome);
      values.push(quarter.researchAndDevelopment);
      values.push(quarter.operatingExpense);
      this.tableData[i] = values.slice();
      this.headerData.unshift(quarter.reportDate);
      let data = {
        label: quarters[i].reportDate,
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
      datasets.push(data);
    }
    this.headerData.unshift("Cash Flow");
    // this.createChart("horizontalBar");
    this.updateChart(labels, datasets);
  }


  updateChart(labels : any, datasets: any) {

    this.myChart.data.datasets = datasets;
    this.myChart.data.labels = labels;
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

  createChart(type : string = "bar") {
    this.canvas = document.getElementById("chart2");
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
    this.changeSelection(1);
  }

}
