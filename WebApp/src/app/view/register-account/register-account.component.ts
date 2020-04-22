import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { AlertMessageService } from 'src/app/core/services/alert-message.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ResponeStatusEnum } from 'src/app/core/models/shared/respone.model';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {

  ngOnInit() {
  }
}
