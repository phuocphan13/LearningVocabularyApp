import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Shell } from "src/app/core/shell/shell.service";
import { RegisterAccountComponent } from "./register-account.component";

const routes: Routes = [
    Shell.childRoutes([
        {
            path: 'register-account',
            component: RegisterAccountComponent
        },
    ])
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class RegisterAccountRoutingModule { }