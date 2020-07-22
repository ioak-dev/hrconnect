import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRequestComponent } from './create-request/create-request.component';

const routes: Routes = [
  {
    path: 'hrc-transport/create',
    component: CreateRequestComponent
  },
  {
    path: 'hrc-transport',
    redirectTo: 'hrc-transport/create'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
