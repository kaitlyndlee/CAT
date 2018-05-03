import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {StocksPageComponent} from '../stocks-page/stocks-page.component';
import {CompanyModel} from '../company.model';
import {StockMarketService} from '../stock-market.service';
// import {DatabaseService} from '../database.service';



@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  company : CompanyModel;
  // companies : CompanyModel[];
  constructor(private authService: AuthService) {

    // let stockSymbols: string[] = [];
    // console.log("Verify value");
    // console.log(this.authService.getUserStocks());
  }

  ngOnInit() {}

  addFave(name) {
    this.authService.addStockToFave(name);
  }

  selectStock(ticker: string) {

   StockMarketService.selectCompany(ticker);
    this.company = StockMarketService.selectedCompany;
  }

  getEmail() {
    return this.authService.getEmail();
  }

  getName() {
    return this.authService.getName();
  }

  getID() {
    return this.authService.getID();
  }

  getUserStocks() {
    return this.authService.getUserStocks();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getCompany() {
    return this.company;
  }
}
