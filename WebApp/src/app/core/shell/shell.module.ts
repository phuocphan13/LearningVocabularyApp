import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ShellComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
  ],
  exports: [
    ShellComponent
  ]
})
export class ShellModule { }
