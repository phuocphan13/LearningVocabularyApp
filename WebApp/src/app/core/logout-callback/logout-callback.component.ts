import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout-callback',
  templateUrl: './logout-callback.component.html',
  styleUrls: ['./logout-callback.component.scss']
})
export class LogoutCallbackComponent implements OnInit {

  error: boolean;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService) { }

  async ngOnInit() {

    // check for error
    if (this.route.snapshot.fragment.indexOf('error') >= 0) {
      this.error = true;
      return;
    }

    sessionStorage.clear();
    localStorage.clear();
    console.log(this.cookieService.get(".AspNetCore.Identity.Application"))
    this.cookieService.deleteAll();
    this.cookieService.delete(".AspNetCore.Identity.Application");
    //Clear Cookies
    
    this.router.navigate(['']);
  }
}
