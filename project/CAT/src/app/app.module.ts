import {AppRoutingModule} from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginModalComponent } from './login-modal/login-modal.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';

import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AppComponent} from './app.component';
import {AuthService} from './auth.service';
import {StockMarketService} from './stock-market.service';
import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { StocksPageComponent } from './stocks-page/stocks-page.component';
import { MypageComponent } from './mypage/mypage.component';
import { KeywordReaderComponent } from './keyword-reader/keyword-reader.component';
import {JsonReaderService} from "./json-reader.service";
import {HttpClientModule} from "@angular/common/http";
import { ViewStockComponent } from './view-stock/view-stock.component';
import { StockTableComponent } from './stock-table/stock-table.component';
import { LinechartComponent } from './linechart/linechart.component';
// To use Material Component
import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatMenuModule } from '@angular/material';

// To use Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// For Routing Purpose
import { routing } from './linechart/routes';

// For FusionChart
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { MarketTableComponent } from './market-table/market-table.component';
import { SidenavComponent } from './sidenav/sidenav.component';
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GlossaryPageComponent } from './glossary-page/glossary-page.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';
import {Router, RouterModule} from '@angular/router';
import { StockSearchModelComponent } from './stock-search-model/stock-search-model.component';
import { NewsListComponent } from './news-list/news-list.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { ExchangeListComponent } from './exchange-list/exchange-list.component';
import { NewsCardComponent } from './news-card/news-card.component';
// import { FirestoreComponent } from './firestore/firestore.component';

// Copy the firebaseConfig from your created project on the firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBkq9oGeeW730FonqTZPBs_g_RJKUEow8U",
  authDomain: "capitalactivitytracker-c9faf.firebaseapp.com",
  databaseURL: "https://capitalactivitytracker-c9faf.firebaseio.com",
  projectId: "capitalactivitytracker-c9faf",
  storageBucket: "capitalactivitytracker-c9faf.appspot.com",
  messagingSenderId: "65930208508"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent,
    GlobalHeaderComponent,
    NewsfeedPageComponent,
    StocksPageComponent,
    MypageComponent,
    KeywordReaderComponent,
    ViewStockComponent,
    StockTableComponent,
    LinechartComponent,
    MarketTableComponent,
    SidenavComponent,
    HomepageComponent,
    AboutPageComponent,
    GlossaryPageComponent,
    TutorialPageComponent,
    StockSearchModelComponent,
    NewsListComponent,
    StockCardComponent,
    ExchangeListComponent,
    NewsCardComponent,
    // FirestoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    FusionChartsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule


  ],
  exports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AuthService, HttpClient, KeywordReaderComponent, JsonReaderService, LoginModalComponent, StockMarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
