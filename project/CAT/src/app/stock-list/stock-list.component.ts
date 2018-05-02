import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../company.model";
import {StockMarketService} from "../stock-market.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  @Input() title : string;
  @Input() horizontal: boolean;
  @Input() companyList : CompanyModel[];
  constructor(ss: StockMarketService) {
  }

  ngOnInit() {

  }

  selectCompany(company: CompanyModel) {
    StockMarketService.selectCompany(company.symbol);
  }

  getCompaniesForCarousel() {
    let temp = [];
    let index = 0;
    temp[index] = [];
    for (let i = 0; i < this.companyList.length; i++) {
      temp[index].push(this.companyList[i]);
      if (i > 0 && i % 3 == 0) {
        index++;
        temp[index] = [];
      }
    }
    console.log(temp);
    return temp;
  }

  isHorizontal() : boolean {
    return this.horizontal;
  }

}
