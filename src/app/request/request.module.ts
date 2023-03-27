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
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";



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
        MatTableModule,
        MatSortModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatListModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatIconModule,
    ]
})
export class RequestModule { }
