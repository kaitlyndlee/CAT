import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../company.model";
import {StockMarketService} from "../stock-market.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  @Input() companyList : CompanyModel[];
  constructor(private stockService: StockMarketService) { }

  ngOnInit() {
  }

  selectCompany(company: CompanyModel) {
    StockMarketService.selectedCompany = company;
  }

}
