import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsfeedPageComponent} from './newsfeed-page/newsfeed-page.component'
import {StocksPageComponent} from './stocks-page/stocks-page.component'
import {LoginComponent} from './login/login.component';
import {MypageComponent} from './mypage/mypage.component';
import {SignupComponent} from './signup/signup.component';
import {EmailComponent} from './email/email.component';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'email-login', component: EmailComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'mypage', component: MypageComponent},
  {path: 'newsfeed', component: NewsfeedPageComponent},
  {path: 'stocks', component: StocksPageComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
