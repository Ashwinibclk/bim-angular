import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauloginComponent } from './tableaulogin/tableaulogin.component';

const routes: Routes = [
  { path: 'tableaulogin', component: TableauloginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
