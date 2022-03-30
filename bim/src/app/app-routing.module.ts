import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauloginComponent } from './tableaulogin/tableaulogin.component';
import { QuicksightloginComponent } from './quicksightlogin/quicksightlogin.component';

import { DepartmentComponent } from './department/department.component';

import { CustomerComponent } from './customer/customer.component';
import { BimprojectComponent } from './bimproject/bimproject.component';
const routes: Routes = [
  { path: 'tableaulogin', component: TableauloginComponent },
  { path: 'quicksightlogin', component: QuicksightloginComponent },
 
  { path: 'bimlogin', component: BimprojectComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'customer', component: CustomerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
