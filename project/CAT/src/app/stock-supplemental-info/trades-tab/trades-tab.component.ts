import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../../company.model";

@Component({
  selector: 'app-trades-tab',
  templateUrl: './trades-tab.component.html',
  styleUrls: ['./trades-tab.component.css']
})
export class TradesTabComponent implements OnInit {

  @Input() company : CompanyModel;
  constructor() {
  }

  format(value : number) {
    if (!value) return "None";
    return value.toLocaleString;
  }

  isPositive(value : number) {
    return value > this.company.getStock().quote.latestPrice;
  }
  isNegative(value : number) {
    return value < this.company.getStock().quote.latestPrice;
  }
  isNeutral(value : number) {
    return value == this.company.getStock().quote.latestPrice;
  }

  getTime(value : any) {
    return new Date(value);
  }

  ngOnInit() {
    console.log("Comnpany");
    console.log(this.company);
  }

}
