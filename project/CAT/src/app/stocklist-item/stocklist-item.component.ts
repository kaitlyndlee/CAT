import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../company.model";
import {StockMarketService} from "../stock-market.service";

@Component({
  selector: 'app-stocklist-item',
  templateUrl: './stocklist-item.component.html',
  styleUrls: ['./stocklist-item.component.css']
})
export class StocklistItemComponent implements OnInit {

  isPositive: boolean = false;
  isNegative: boolean = false;
  isNeutral : boolean = false;

  @Input() company: CompanyModel;
  constructor(stockService : StockMarketService) { }

  getCompanyStock() {
    return this.company.getStock();
  }


  round (value : number) : number {
    this.isPositive = false;
    this.isNegative = false;
    this.isNeutral  = false;
    let rounded = Math.round(value * 1000) / 1000;

    if (rounded < 0) this.isNegative = true;
    if (rounded == 0) this.isNeutral = true;
    if (rounded > 0) this.isPositive = true;

    return rounded;
  }
  ngOnInit() {
  }

}
