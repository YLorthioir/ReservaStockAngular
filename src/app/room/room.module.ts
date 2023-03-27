import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoomRoutingModule} from "./room-routing.module";
import {RoomAllComponent} from "./all/roomAll.component";
import {RoomComponent} from "./room/room.component";
import { RoomOneComponent } from './one/roomOne.component';
import { RoomCreateComponent } from './create/roomCreate.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RoomUpdateComponent } from './update/roomUpdate.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    RoomAllComponent,
    RoomComponent,
    RoomOneComponent,
    RoomCreateComponent,
    RoomUpdateComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatMenuModule,
  ]
})
export class RoomModule { }
