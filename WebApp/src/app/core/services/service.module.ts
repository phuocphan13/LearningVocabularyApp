import { NgModule } from '@angular/core';
import { FilmOnlineShareService } from './film-online-shared.service';
import { AuthService } from './auth.service';
import { ConfigService } from 'src/app/shared/config.service';
import { OwnerService } from './owner.service';
import { DriverService } from './driver.service';
import { VehicleService } from './vehicle.service';
import { DetailService } from './detail.service';
import { OverviewService } from './overview.service';
import { AlertMessageService } from './alert-message.service';
import { ExcelService } from './excel.service';
import { UserShareService } from './user-shared.service';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { CompanyService } from './company.service';

@NgModule({
  declarations: [
  ],
  providers: [
    FilmOnlineShareService,
    AuthService,
    ConfigService,
    OwnerService,
    DetailService,
    DriverService,
    VehicleService,
    OverviewService,
    AlertMessageService,
    ExcelService,
    UserShareService,
    ApiService,
    UserService,
    CompanyService
  ]
})
export class ServiceModule { }
