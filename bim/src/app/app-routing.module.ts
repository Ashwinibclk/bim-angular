import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauloginComponent } from './tableaulogin/tableaulogin.component';
import { QuicksightloginComponent } from './quicksightlogin/quicksightlogin.component';
import { CustomerComponent } from './customer/customer.component';
import { DepartmentComponent } from './department/department.component';
import { BIMProjectComponent } from './bimproject/bimproject.component';


const routes: Routes = [
  { path: 'tableaulogin', component: TableauloginComponent },
  { path: 'quicksightlogin', component: QuicksightloginComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'bimprojectlogin', component: BIMProjectComponent },
  { path: 'department', component: DepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
