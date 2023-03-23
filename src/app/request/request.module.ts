import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestAllComponent } from './all/request-all.component';
import {RequestRoutingModule} from "./request-routing.module";
import { RequestAllUnconfirmedComponent } from './all-unconfirmed/requestAll-unconfirmed.component';
import { RequestOneComponent } from './one/request-one.component';
import { RequestAddComponent } from './add/request-add.component';
import { RequestConfirmComponent } from './confirm/request-confirm.component';
import { RequestDeleteComponent } from './delete/request-delete.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RequestAllComponent,
    RequestAllUnconfirmedComponent,
    RequestOneComponent,
    RequestAddComponent,
    RequestConfirmComponent,
    RequestDeleteComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RequestModule { }
