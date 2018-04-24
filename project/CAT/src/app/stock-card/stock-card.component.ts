import { Component, OnInit } from '@angular/core';
import {StockMarketModel} from "../stock-market.model";
import {StocksPageComponent} from "../stocks-page/stocks-page.component";
import {CompanyModel} from "../company.model";
import {StockMarketService} from "../stock-market.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  getCompany(): CompanyModel {
    return StocksPageComponent.selectedCompany;
  }

  favoriteStock(company: CompanyModel) {
    this.authService.addStockToFave(company);
  }

}
