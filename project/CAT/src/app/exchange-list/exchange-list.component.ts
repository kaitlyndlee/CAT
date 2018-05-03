import { Component, OnInit } from '@angular/core';
import {CompanyModel} from "../company.model";
import {StockMarketService} from "../stock-market.service";
import {StocksPageComponent} from "../stocks-page/stocks-page.component";

@Component({
  selector: 'app-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.css']
})
export class ExchangeListComponent implements OnInit {

  constructor(private stockService: StockMarketService) { }

  ngOnInit() {
  }

  getSelectedCompany() {
    return StockMarketService.selectedCompany;
  }

  selectCompany(company: CompanyModel) {
    StockMarketService.selectedCompany = company;
  }
}
