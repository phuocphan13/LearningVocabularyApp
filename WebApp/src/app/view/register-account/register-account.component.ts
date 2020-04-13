import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { AlertService } from 'ngx-alerts';
import { AlertMessageService } from 'src/app/core/services/alert-message.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ResponeStatusEnum } from 'src/app/core/models/shared/respone.model';
import { ResigterAccountModel } from 'src/app/core/models/account/register-account.model';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { CompanyService } from 'src/app/core/services/company.service';
import { CompanyModel } from 'src/app/core/models/account/company.model';
import { RoleModel } from 'src/app/core/models/account/role.model';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {

  account: ResigterAccountModel;
  accountFormGroup: FormGroup;

  listCompanies: CompanyModel[] = [];
  listRoles: RoleModel[] = [];

  minDate: Date;
  selectedRole: string;

  constructor(private authService: AuthService,
    private alertMessageService: AlertMessageService,
    private alertService: AlertService,
    private userService: UserService,
    private companyService: CompanyService) {
  }

  ngOnInit() {
    this.account = new ResigterAccountModel();
    this.minDate = new Date();
    this.createFormGroup();
    this.companyService.get().subscribe(result => {
      if (result.responeStatus === ResponeStatusEnum.Successed)
        this.listCompanies = result.data;
    });
    this.authService.getRoles().subscribe(result => {
      if (result) {
        this.listRoles = result;
      }
    })
  }

  onClickCreateAccount() {
    if (this.accountFormGroup.get("name").invalid ||
      this.accountFormGroup.get("password").invalid ||
      this.accountFormGroup.get("confirmPassword").invalid ||
      this.accountFormGroup.get("roleId").invalid ||
      this.accountFormGroup.get("companyId").invalid ||
      this.accountFormGroup.get("expiredDate").invalid) {
      return;
    }

    var user: any = {
      name: this.account.name,
      email: `${this.account.name}@gmail.com`,
      password: this.account.password,
      roleName: this.selectedRole,
    }

    this.authService.register(user).subscribe(result => {
      if (result) {
        this.userService.createUser(result.id, this.account.companyId).subscribe(response => {
          if (response.responeStatus === ResponeStatusEnum.Failed) {
            this.alertMessageService.alertShowing(response);
          }
          if (response.responeStatus === ResponeStatusEnum.Successed) {
            this.authService.updateConfirm(response.data).subscribe(isSuccess => {
              if (isSuccess.succeeded) {
                this.alertService.success("Tạo tài khoản thành công");
              }
              else {
                this.alertService.danger("Tạo tài khoản thất bại");
              }
            })
          }
        })
      }
    })
  }

  onChangeRole(event) {
    this.selectedRole = event.name;
  }

  onClickCloseButton() {

  }

  private createFormGroup() {
    this.accountFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.checkConfirmPassword(),
      ]),
      email: new FormControl('', [
        Validators.required,
        // Validators.pattern("^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"),
      ]),
      roleId: new FormControl(0, [
        Validators.required,
      ]),
      companyId: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]$"),
      ]),
      expiredDate: new FormControl('', [
        Validators.required,
        this.checkExpiredDate()
      ]),
    })
  }

  private checkConfirmPassword = () => {
    return (control: FormControl) => {
      let confirmPassword = control.value;
      if (confirmPassword !== this.account.password) {
        return {
          checkPassword:
          {
            valid: false,
          }
        }
      }
      return null;
    }
  }

  private checkExpiredDate = () => {
    return (control: FormControl) => {
      let expiredDate = control.value;
      if (expiredDate < Date.now) {
        return {
          expiredDate:
          {
            valid: false,
          }
        }
      }
      return null;
    }
  }
}
