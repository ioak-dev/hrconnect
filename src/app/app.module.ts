import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HrcAttendanceModule } from 'projects/hrc-attendance/src/app/app.module';
import { HrcPayrollModule } from 'projects/hrc-payroll/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HrcAttendanceModule.forRoot(),
    HrcPayrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
