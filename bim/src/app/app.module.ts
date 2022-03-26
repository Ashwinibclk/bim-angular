import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmplifyUIAngularModule} from "@aws-amplify/ui-angular";
import { Auth } from "@aws-amplify/auth";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauloginComponent } from './tableaulogin/tableaulogin.component';


@NgModule({
  declarations: [
    AppComponent,
    TableauloginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    /* configure App with AmplifyAuthenticatorModule */
    
    AmplifyUIAngularModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }