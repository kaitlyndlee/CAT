import {Component, Input, OnInit} from '@angular/core';
import {Stock} from "../Stock.model";

@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.css']
})

export class ViewStockComponent implements OnInit {

  @Input() stockInformation: Stock;
  constructor() {


  }

  ngOnInit() {

  }

}
