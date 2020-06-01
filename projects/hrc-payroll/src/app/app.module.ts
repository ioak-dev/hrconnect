import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PayrollComponent } from './payroll/payroll.component';
import { ManagePayrollComponent } from './manage-payroll/manage-payroll.component';
const providers = [];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PayrollComponent,
    ManagePayrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})

export class AppModule { }

export class HrcPayrollModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}
