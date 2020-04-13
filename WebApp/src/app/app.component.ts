import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserShareService } from './core/services/user-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
    private userShareService: UserShareService) {

  }

  ngOnInit() {
    // this.router.navigateByUrl("management");
    // this.router.navigateByUrl("management/detail");
    this.userShareService.getAuthenData();
  }
}