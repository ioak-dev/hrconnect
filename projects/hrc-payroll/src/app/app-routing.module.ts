import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayrollComponent } from './payroll/payroll.component';
import { ManagePayrollComponent } from './manage-payroll/manage-payroll.component';

const routes: Routes = [
  {
    path: 'hrc-payroll/payroll',
    component: PayrollComponent
  },
  {
    path: 'hrc-payroll/manage-payroll',
    component: ManagePayrollComponent
  },
  {
    path: 'hrc-payroll',
    redirectTo: 'hrc-payroll/payroll'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
