import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WizardTwoComponent} from './travel/wizard/wizard-two/wizard-two.component';
import {WizardThreeComponent} from './travel/wizard/wizard-three/wizard-three.component';
import {WizardOneComponent} from './travel/wizard/wizard-one/wizard-one.component';
import {WizardFourComponent} from './travel/wizard/wizard-four/wizard-four.component';
import {WizardFiveComponent} from './travel/wizard/wizard-five/wizard-five.component';
import {WizardSixComponent} from './travel/wizard/wizard-six/wizard-six.component';
import {WizardSevenComponent} from './travel/wizard/wizard-seven/wizard-seven.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {VisaComponent} from './travel/wizard/visa/visa.component';
import {InsuranceComponent} from './travel/wizard/insurance/insurance.component';
import {SubmitComponent} from './travel/wizard/submit/submit.component';
import {TravelComponent} from './travel/travel/travel.component';
import {RequestViewComponent} from './travel/request-view/request-view.component';
import {WizardStepperComponent} from './travel/wizard/wizard-stepper/wizard-stepper.component';
import {WizardsComponent} from './travel/wizard/wizards/wizards.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'travel',
    component: TravelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'travel/application',
    component: WizardsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'projectDetail',
        component: WizardOneComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'travelType',
        component: WizardTwoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cabDetail',
        component: WizardThreeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'flightDetail',
        component: WizardFourComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'trainDetail',
        component: WizardFiveComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'busDetail',
        component: WizardSixComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'hotelDetail',
        component: WizardSevenComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'visaDetail',
        component: VisaComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'insuranceDetail',
        component: InsuranceComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'submit',
        component: SubmitComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: 'travel/view/:requestId',
    component: RequestViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
