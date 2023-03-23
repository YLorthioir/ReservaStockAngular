import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {AdminComponent} from "./admin/admin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import { ToValidateComponent } from './to-validate/to-validate.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';



@NgModule({
  declarations: [
    AdminComponent,
    RegisterComponent,
    ToValidateComponent,
    ForgottenPasswordComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
