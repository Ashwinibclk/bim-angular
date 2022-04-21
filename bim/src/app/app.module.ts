import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyUIAngularModule } from "@aws-amplify/ui-angular";
import { Auth } from "@aws-amplify/auth";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauloginComponent } from './tableaulogin/tableaulogin.component';
import { QuicksightloginComponent } from './quicksightlogin/quicksightlogin.component';

import { DepartmentComponent } from './department/department.component';

import { CustomerComponent } from './customer/customer.component';
import { BimprojectComponent } from './bimproject/bimproject.component';
import { DatasetComponent } from './dataset/dataset.component';
import { TableauComponent } from './tableaulogin/tableau/tableau.component';
import { QuicksightComponent } from './quicksight/quicksight.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule ,NgxSpinnerService} from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    TableauloginComponent,
    QuicksightloginComponent,

    DepartmentComponent,

    CustomerComponent,
    BimprojectComponent,
    DatasetComponent,
    TableauComponent,
    QuicksightComponent,



  ],
  imports: [
    BrowserModule,


    /* configure App with AmplifyAuthenticatorModule */

    AmplifyUIAngularModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }