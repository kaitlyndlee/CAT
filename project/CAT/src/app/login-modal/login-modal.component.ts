import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

}
