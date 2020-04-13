import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserShareService } from '../services/user-shared.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  error: boolean;

  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private userShareService: UserShareService) { }

  async ngOnInit() {

    // check for error
    if (this.route.snapshot.fragment.indexOf('error') >= 0) {
      this.error = true;
      return;
    }

    await this.authService.completeAuthentication();
    this.userShareService.getAuthenData();
    this.router.navigate(['']);
  }
}
