import { Component, OnInit } from '@angular/core';
import {CompanyModel} from "../company.model";
import {StocksPageComponent} from "../stocks-page/stocks-page.component";
import {StockMarketService} from "../stock-market.service";

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css']
})
export class StockTableComponent implements OnInit {

  constructor(private stockService: StockMarketService) { }

  ngOnInit() {

  }

  getStockMarket(): CompanyModel[] {
    return this.stockService.getStockArray();
  }

  selectCompany(company: CompanyModel) {
    StocksPageComponent.selectedCompany = company;
  }

}
