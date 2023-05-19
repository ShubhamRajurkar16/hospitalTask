import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {path:'',component:BillComponent},
  {path:'dash',component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
