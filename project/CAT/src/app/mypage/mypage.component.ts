import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {AngularFireAuthModule} from 'angularfire2/auth';



@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  signOut() {
    this.authService.logout();
  }

}
