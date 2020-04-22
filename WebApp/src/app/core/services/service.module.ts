import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { ConfigService } from 'src/app/shared/config.service';
import { AlertMessageService } from './alert-message.service';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
  ],
  providers: [
    AuthService,
    ConfigService,
    AlertMessageService,
    ApiService,
  ]
})
export class ServiceModule { }
