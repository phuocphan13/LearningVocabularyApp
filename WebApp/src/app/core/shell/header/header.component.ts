import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ResponeStatusEnum } from '../../models/shared/respone.model';
import { AlertMessageService } from '../../services/alert-message.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { UserShareService } from '../../services/user-shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSignIn: boolean = false;

  constructor(private route: Router,
    private authService: AuthService,
    private userSharedService: UserShareService) { }

  ngOnInit() {
    this.isSignIn = this.userSharedService.isSignIn;
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
