import {AppRoutingModule} from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { LoginModalComponent } from './login-modal/login-modal.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';

import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AppComponent} from './app.component';
import {AuthService} from './auth.service';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {EmailComponent} from './email/email.component';
import {ProfileComponent} from './profile/profile.component';
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

// Copy the firebaseConfig from your created project on the firebase console
const firebaseConfig = {
apiKey: "AIzaSyAVD-QZUuKapu1pVOM9s2XIEkMulTk8SlY",
authDomain: "capital-activity-tracker.firebaseapp.com",
databaseURL: "https://capital-activity-tracker.firebaseio.com",
projectId: "capital-activity-tracker",
storageBucket: "",
messagingSenderId: "233921961729"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent,
    GlobalHeaderComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    ProfileComponent,
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
    TutorialPageComponent
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
    AngularFireAuthModule
  ],
  exports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [AuthService, HttpClient, KeywordReaderComponent, JsonReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
