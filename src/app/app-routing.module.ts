import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrcAttendanceModule } from 'projects/hrc-attendance/src/app/app.module';
import { HrcPayrollModule } from 'projects/hrc-payroll/src/app/app.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'hrc-attendance',
    loadChildren: '../../projects/hrc-attendance/src/app/app.module#HrcAttendanceModule'
  },
  {
    path: 'hrc-payroll',
    loadChildren: '../../projects/hrc-payroll/src/app/app.module#HrcPayrollModule'
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HrcAttendanceModule.forRoot(),
    HrcPayrollModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
