import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {AdminComponent} from "./admin/admin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import { ToValidateComponent } from './to-validate/to-validate.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";



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
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatMenuModule,
  ]
})
export class AdminModule { }
