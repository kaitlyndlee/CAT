import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsfeedPageComponent} from './newsfeed-page/newsfeed-page.component';
import {StocksPageComponent} from './stocks-page/stocks-page.component';
import {LoginComponent} from './login/login.component';
import {MypageComponent} from './mypage/mypage.component';
import {SignupComponent} from './signup/signup.component';
import {EmailComponent} from './email/email.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {GlossaryPageComponent} from './glossary-page/glossary-page.component';
import {TutorialPageComponent} from './tutorial-page/tutorial-page.component';
const routes: Routes = [
   {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'email-login', component: EmailComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'mypage', component: MypageComponent},
  {path: 'newsfeed', component: NewsfeedPageComponent},
  {path: 'stocks', component: StocksPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'glossary', component: GlossaryPageComponent},
  {path: 'tutorial', component: TutorialPageComponent},




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
