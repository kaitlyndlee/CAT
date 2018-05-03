import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../company.model";

@Component({
  selector: 'app-stock-supplemental-info',
  templateUrl: './stock-supplemental-info.component.html',
  styleUrls: ['./stock-supplemental-info.component.css']
})
export class StockSupplementalInfoComponent implements OnInit {
  @Input() company : CompanyModel;
  constructor() { }

  ngOnInit() {
    this.company.refresh();
  }

}
