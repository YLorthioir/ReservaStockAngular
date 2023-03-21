import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoomRoutingModule} from "./room-routing.module";
import {RoomAllComponent} from "./all/roomAll.component";
import {RoomComponent} from "./room/room.component";
import { RoomOneComponent } from './one/roomOne.component';
import { RoomCreateComponent } from './create/roomCreate.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RoomUpdateComponent } from './update/roomUpdate.component';



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
  ]
})
export class RoomModule { }
