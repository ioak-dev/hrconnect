import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WizardOneComponent} from './travel/wizard/wizard-one/wizard-one.component';
import {WizardTwoComponent} from './travel/wizard/wizard-two/wizard-two.component';
import {WizardThreeComponent} from './travel/wizard/wizard-three/wizard-three.component';
import {WizardFourComponent} from './travel/wizard/wizard-four/wizard-four.component';
import {WizardFiveComponent} from './travel/wizard/wizard-five/wizard-five.component';
import {WizardSixComponent} from './travel/wizard/wizard-six/wizard-six.component';
import {WizardSevenComponent} from './travel/wizard/wizard-seven/wizard-seven.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import { VisaComponent } from './travel/wizard/visa/visa.component';
import { InsuranceComponent } from './travel/wizard/insurance/insurance.component';
import { SubmitComponent } from './travel/wizard/submit/submit.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    WizardOneComponent,
    WizardTwoComponent,
    WizardThreeComponent,
    WizardFourComponent,
    WizardFiveComponent,
    WizardSixComponent,
    WizardSevenComponent,
    LoginComponent,
    UnauthorizedComponent,
    VisaComponent,
    InsuranceComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
