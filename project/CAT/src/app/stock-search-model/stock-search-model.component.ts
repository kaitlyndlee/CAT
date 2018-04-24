import {Component, Input, OnInit} from '@angular/core';
import {StockMarketModel} from "../stock-market.model";

@Component({
  selector: 'app-stock-search-model',
  templateUrl: './stock-search-model.component.html',
  styleUrls: ['./stock-search-model.component.css']
})
export class StockSearchModelComponent implements OnInit {

  @Input() stockMarket: StockMarketModel;
filter:string = "";
  constructor() { }


  filterSearch() {
    if (this.stockMarket) {

      let input, filter, ul, li, a, i;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      this.filter = filter;
      ul = document.getElementById("myUL");

      li = ul.getElementsByTagName('li');

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (filter.length > 0 && a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }

  }
  ngOnInit() {
  }

}
