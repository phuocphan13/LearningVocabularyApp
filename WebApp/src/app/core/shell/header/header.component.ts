import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ResponeStatusEnum } from '../../models/shared/respone.model';
import { AlertMessageService } from '../../services/alert-message.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSignIn: boolean = false;

  constructor(private route: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }
  
  signIn() {
    this.authService.login();
  }

  signOut(){
    // localStorage.clear();
    // sessionStorage.clear();
    // this.isSignIn = false;
    this.authService.signout();
  }

  onClickUserSetting(){
    this.route.navigateByUrl("/register-account");
  }
}
