import {AppRoutingModule} from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { HomepageComponent } from './homepage/homepage.component';

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
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
