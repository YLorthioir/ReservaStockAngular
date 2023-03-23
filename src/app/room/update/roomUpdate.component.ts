import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RoomService} from "../../service/room.service";
import {MaterialService} from "../../service/material.service";
import {RoomForm} from "../../models/room/roomForm";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './roomUpdate.component.html',
  styleUrls: ['./roomUpdate.component.css']
})
export class RoomUpdateComponent implements OnInit{
  form: FormGroup;
  form2: FormGroup;
  rooms!: any;
  materials!: any;
  roomId!: number;
  room?: any;

  constructor(private readonly _roomService: RoomService, private readonly _materialService: MaterialService, private _router: Router) {
    this.form2 = new FormGroup({
      'roomId': new FormControl('')
    })
    this.form = new FormGroup({
      'capacity': new FormControl(''),
      'name': new FormControl(''),
      'forStaff': new FormControl(false),
      'contains': new FormControl(''),
    })
    this.form2.get('roomId')?.valueChanges.subscribe((v) => {
      this.roomId=v;
      this.room = this._roomService.getOne(v).subscribe({
        next: (room) => {
          this.room = room;
          this.refresh();
    }})
    })
  }

  ngOnInit(): void {

    this._materialService.getAll().subscribe({
      next: (materials) => {
        this.materials = materials;
      },
    })
    this._roomService.getAll().subscribe({
      next: (rooms) => {
        this.rooms = rooms
      }
    })
  }

  onSubmit(){
    if( this.form.valid ){
      const room: RoomForm = {...this.form.value}
      console.log(this.roomId)
      this._roomService.update(room, this.roomId).subscribe((response: any) => {
        console.log(response);
        this._router.navigate(['room']);
      });
    }
  }

  refresh():void{
        this.form = new FormGroup({
          'capacity': new FormControl(this.room.capacity),
          'name': new FormControl(this.room.name),
          'forStaff': new FormControl(this.room.forStaff),
          'contains': new FormControl(this.room.contains),
        })
  }
}
