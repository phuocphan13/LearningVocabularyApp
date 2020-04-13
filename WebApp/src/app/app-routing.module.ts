import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';
import { LogoutCallbackComponent } from './core/logout-callback/logout-callback.component';

const routes: Routes = [
  {
  },
  {
  },
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
