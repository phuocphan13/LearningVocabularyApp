import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, ProgressbarModule, BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipeModule } from 'src/app/common/pipes/pipe.module';
import { AlertModule } from 'ngx-alerts';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonComponentModule } from 'src/app/common/components/common-component.module';
import { ShellModule } from 'src/app/core/shell/shell.module';
import { RegisterAccountRoutingModule } from './register-account-routing.module';
import { RegisterAccountComponent } from './register-account.component';

@NgModule({
    declarations: [
        RegisterAccountComponent
    ],
    imports: [
        RegisterAccountRoutingModule,
        CommonComponentModule,
        NgSelectModule,
        CommonModule,
        CarouselModule.forRoot(),
        FormsModule,
        NgbModule,
        PipeModule,
        ShellModule,
        ReactiveFormsModule,
        CommonComponentModule,
        BsDatepickerModule,
        ProgressbarModule.forRoot(),
        AlertModule.forRoot({ maxMessages: 5, timeout: 2000, position: 'right' }),
    ],
    entryComponents: [
    ],
    exports: [
    ],
    providers: [
    ]
})
export class RegisterAccountModule { }
