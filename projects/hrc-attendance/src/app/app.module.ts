import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NavComponent } from './nav/nav.component';
import { ManageAttendanceComponent } from './manage-attendance/manage-attendance.component';
const providers = [];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AttendanceComponent,
    ManageAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})

export class AppModule { }

export class HrcAttendanceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}
