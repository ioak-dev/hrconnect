import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WizardOneComponent } from './travel/wizard/wizard-one/wizard-one.component';
import { WizardTwoComponent } from './travel/wizard/wizard-two/wizard-two.component';
import { WizardThreeComponent } from './travel/wizard/wizard-three/wizard-three.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    WizardOneComponent,
    WizardTwoComponent,
    WizardThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
