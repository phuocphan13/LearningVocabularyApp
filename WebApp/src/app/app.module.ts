import { NgModule, forwardRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ProgressbarModule } from 'ngx-bootstrap';

import { ModalsModule } from './modals/modals.module';

import { BsDropdownModule, ModalModule, CarouselModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-alerts';
import { SharedModule } from './shared/shared.module';

import { ControlModule } from './controls/control.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ServiceModule } from './core/services/service.module';
import { AppCommonModule } from './common/app-common.module';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';
import { ShellModule } from './core/shell/shell.module';
import { BrowserModule } from '@angular/platform-browser';
import { MotoManagementModule } from './view/moto-management/moto-management.module';
import { HeaderComponent } from './core/shell/header/header.component';
import { RegisterAccountComponent } from './view/register-account/register-account.component';
import { RegisterAccountModule } from './view/register-account/register-account.module';
import { LogoutCallbackComponent } from './core/logout-callback/logout-callback.component';
import { CookieService } from 'ngx-cookie-service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

export const environment = {
  production: false,
  appName: 'Lucifer'
};

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
    LogoutCallbackComponent,
  ],
  imports: [
    ModalsModule,
    AppCommonModule,

    MotoManagementModule,
    RegisterAccountModule,

    ServiceModule,
    ControlModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ShellModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserModule,
    ReactiveFormsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  entryComponents: [
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    CookieService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
