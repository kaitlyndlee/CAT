import {Component, Input, OnInit} from '@angular/core';
import {ArticleParserService} from "../article-parser.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() horizontal: boolean;
  @Input() newsList : any;

  isPositive : boolean = false;
  isNegative : boolean = false;
  isNeutral  : boolean = false;

  constructor(private parser: ArticleParserService) { }

  ngOnInit() {

  }

  parse(feed: string) {
    let value = this.parser.parse(feed);

    this.isNegative = false;
    this.isPositive = false;
    this.isNeutral  = false;
    if (value < 0) this.isNegative = true;
    if (value == 0) this.isNeutral = true;
    if (value > 0) this.isPositive = true;
    return value;
  }

  isHorizontal() : boolean {
    return this.horizontal;
  }

  getDayDifference(date: string) : string {
    let date1 = new Date(date);
    let current = new Date();
    let value;
    if (date1.getMonth() == current.getMonth()) {
      let difference = current.getDate() - date1.getDate();
      value = difference == 0 ? "Today" : difference > 1 ? difference + " days ago" : difference + " day ago";
    }
    else {
      let difference = (current.getMonth() - date1.getMonth());
      value = difference == 1 ? "Over " + difference + " month ago" : "Over " + difference  + " months ago";
    }

    return value;
  }
}
