import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../company.model";
import {StocksPageComponent} from "../stocks-page/stocks-page.component";
import {StockMarketService} from "../stock-market.service";

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css']
})
export class StockTableComponent implements OnInit {

  @Input() companies : CompanyModel[];
  constructor() { }

  ngOnInit() {

  }

  getStockMarket(): CompanyModel[] {
    return this.companies;
  }

  selectCompany(company: CompanyModel) {
    StockMarketService.selectCompany(company.symbol);
  }

}
