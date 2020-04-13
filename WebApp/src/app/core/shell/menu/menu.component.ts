import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickHomeMenu() {
    this.router.navigateByUrl("management");
  }

  onClickInfomationMenu() {
    this.router.navigateByUrl("management/detail");
  }
}
