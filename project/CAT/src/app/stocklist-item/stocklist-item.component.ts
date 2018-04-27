import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../company.model";

@Component({
  selector: 'app-stocklist-item',
  templateUrl: './stocklist-item.component.html',
  styleUrls: ['./stocklist-item.component.css']
})
export class StocklistItemComponent implements OnInit {

  @Input() company: CompanyModel;
  constructor() { }

  ngOnInit() {
  }

}
