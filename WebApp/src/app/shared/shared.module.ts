import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonComponentModule } from '../common/components/common-component.module';
import { ModalModule } from 'ngx-bootstrap';
import { AppCommonModule } from '../common/app-common.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    AppCommonModule
  ],
  providers: [
  ],
  exports: [
  ],
})
export class SharedModule { }
