import {Component, OnInit} from '@angular/core';
import {StockMarketService} from '../stock-market.service';
import {AuthService} from "../auth.service";
import {CompanyModel} from "../company.model";

@Component({
  selector: 'app-stocks-page',
  templateUrl: './stocks-page.component.html',
  styleUrls: ['./stocks-page.component.css']
})



export class StocksPageComponent implements OnInit {

  companies : CompanyModel[] = [];

  constructor(private authService: AuthService) {

  }


  ngOnInit() {}

  getSelectedCompany() : CompanyModel {
    return StockMarketService.selectedCompany;

  }

  getCompanies() : CompanyModel[] {
    return StockMarketService.companyList;
  }

  addToFavorite(company: CompanyModel) {
    this.authService.addStockToFave(company);
  }

  getRelatedCompaniesTitle(): string {
    return "Related Companies";
  }

}
