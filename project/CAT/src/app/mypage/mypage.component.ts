import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {StocksPageComponent} from '../stocks-page/stocks-page.component';
import {CompanyModel} from '../company.model';
// import {DatabaseService} from '../database.service';



@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  addFave(name) {
    this.authService.addStockToFave(name);
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

  selectCompany(company: CompanyModel) {
    StocksPageComponent.selectedCompany = company;
  }
}
