import { Injectable } from '@angular/core';
import {CompanyModel} from './company.model';

import {StockMarketModel} from './stock-market.model';
import { IEXClient } from 'iex-api'
import * as _fetch from 'isomorphic-fetch'
import * as companies from 'assets/companylist/companies.json';
import {Stock} from "./Stock.model";
import {current} from "codelyzer/util/syntaxKind";

const iex = new IEXClient(_fetch);


@Injectable()
export class StockMarketService {

  static symbols : string[] = [];

  static selectedCompany : CompanyModel;
  static companyList : CompanyModel[] = [];
  static relatedCompanies : CompanyModel[] = [];

  constructor() {
    StockMarketService.fetchSymbols().then(data => {
      StockMarketService.getCompanies(0, 100).then(data => {
        StockMarketService.companyList = data;
        StockMarketService.selectCompany(data[0].symbol);
        // console.log(data);
        // console.log(data[0]);
        // console.log(data[0].getStock());
      })
    });
  }

  static selectCompany(symbol : string) {
    this.createCompanyFromSymbol(symbol).then(company => {
      this.selectedCompany = company;
      let promises = [];
      this.getPeers(symbol).then(peers => {
        for ( let peer of peers ) {
          promises.push(this.createCompanyFromSymbol(peer));
        }
        Promise.all(promises).then(companies => {
          for ( let company of companies ) {
            if (!company ) {
              console.log("FOUND IT");
            }
          }
          this.relatedCompanies = companies;
          this.selectedCompany.relatedCompanies = companies;
        });
      });
    })
  }

  static getPeers(symbol : string) {
    return iex.request("/stock/" + symbol + "/peers").then(data => {
      return data;
    });
  }

  static async getCompanies(start: number, end: number) {
    let promises = [];
    for (let i = start; i < end; i++) {
      promises.push(this.createCompanyFromSymbol(this.symbols[i]));
    }
    return await Promise.all(promises).then(data => {
      return data;
    });
  }

  static async createCompanyFromSymbol(symbol : string) : Promise<CompanyModel> {
    return iex.stockCompany(symbol).then( data => {
      console.log(data.valueOf());
      return new CompanyModel(data);
    }).catch(reason => {
      return null;
    });
  }

  static getCompanyStock(symbol : string, option="1d", interval=null) {
    return Promise.resolve(iex.stockChart(symbol, option).then(data => {
      return data;
    }));
  }

  static getCompanyNews(symbol : string, range: any = 10) {
    return iex.stockNews(symbol, range);
  }

  static fetchSymbols() : Promise<any> {
    return iex.symbols().then(data => {
      for( let company of data ) {
        this.symbols.push(company.symbol);
      }
    });
  }


}
