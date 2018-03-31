import {Component, OnInit} from '@angular/core';
import {KeywordReaderComponent} from "./keyword-reader/keyword-reader.component";
import {StockMarketModel} from "./stock-market.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private jsonreader : KeywordReaderComponent) {

  }
  ngOnInit(): void {

  }
}
