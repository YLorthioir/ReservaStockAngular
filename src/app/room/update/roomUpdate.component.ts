import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomService} from "../../service/room.service";
import {MaterialService} from "../../service/material.service";
import {RoomForm} from "../../models/room/roomForm";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

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
  roleConnected?: string;

  constructor(private readonly _roomService: RoomService,
              private readonly _materialService: MaterialService,
              private readonly _authService: AuthService,
              private _router: Router) {
    this.form2 = new FormGroup({
      'roomId': new FormControl('')
    })
    this.form = new FormGroup({
      capacity: new FormControl(''),
      name: new FormControl(''),
      forStaff: new FormControl(''),
      contains: new FormControl(''),
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

    this.roleConnected = this._authService.roleConnected.getValue()

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
          capacity: new FormControl(this.room.capacity,[Validators.min(0)]),
          name: new FormControl(this.room.name,[Validators.minLength(3),Validators.maxLength(30)]),
          forStaff: new FormControl(this.room.forStaff),
          contains: new FormControl(this.room.contains),
        })
  }
}
