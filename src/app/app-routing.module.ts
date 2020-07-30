import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {WizardTwoComponent} from './travel/wizard/wizard-two/wizard-two.component';
import {WizardThreeComponent} from './travel/wizard/wizard-three/wizard-three.component';
import {WizardOneComponent} from './travel/wizard/wizard-one/wizard-one.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'travel',
    component: WizardOneComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'travel/empDetail',
    component: WizardTwoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'travel/travelMode',
    component: WizardThreeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
