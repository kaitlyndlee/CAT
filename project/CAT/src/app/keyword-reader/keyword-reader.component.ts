import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import * as data from '../../assets/keywords/keywords.json';
import {JsonReaderService} from "../json-reader.service";

@Component({
  selector: 'app-keyword-reader',
  templateUrl: './keyword-reader.component.html',
  styleUrls: ['./keyword-reader.component.css']
})

@Injectable()
export class KeywordReaderComponent implements OnInit {

  records: any;
  keywords : Keyword[] = [];

  constructor(private readerService : JsonReaderService) {
    this.records = (<any> data).records;
    console.log(data);
    let index : any;

    for (index in this.records) {
      let obj = this.records[index];
      this.keywords.push(new Keyword(obj.Name, obj.City, obj.Country))
    }

    for (index in this.keywords) {
      console.log(this.keywords[index].Name)
    }


  }

  ngOnInit() {
    // this.readerService.getKeywords().subscribe(data => {
    //   this.objects.push(data);
    // });
    // console.log(this.objects);
  }

}

export class Keyword{
  constructor(
    public Name: string,
    public City: string,
    public Country: string
  ){}
}
