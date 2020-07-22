import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { ManageAttendanceComponent } from './manage-attendance/manage-attendance.component';

const routes: Routes = [
  {
    path: 'hrc-attendance/attendance',
    component: AttendanceComponent
  },
  {
    path: 'hrc-attendance/manage-attendance',
    component: ManageAttendanceComponent
  },
  {
    path: 'hrc-attendance',
    redirectTo: 'hrc-attendance/attendance'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
