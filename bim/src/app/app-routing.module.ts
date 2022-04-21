import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauloginComponent } from './tableaulogin/tableaulogin.component';
import { QuicksightloginComponent } from './quicksightlogin/quicksightlogin.component';

import { DepartmentComponent } from './department/department.component';

import { CustomerComponent } from './customer/customer.component';
import { BimprojectComponent } from './bimproject/bimproject.component';
import { DatasetComponent } from './dataset/dataset.component';
import { TableauComponent } from './tableaulogin/tableau/tableau.component';
import { QuicksightComponent } from './quicksight/quicksight.component';
import { API } from 'aws-amplify';




const routes: Routes = [
  { path: 'tableaulogin', component: TableauloginComponent },
  { path: 'quicksightlogin', component: QuicksightloginComponent },
  { path: 'datasets', component: DatasetComponent },
  { path: 'login', component: BimprojectComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'sign-up', component: CustomerComponent },
  { path: 'tableau', component: TableauComponent },
  { path: 'quicksight', component: QuicksightComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
