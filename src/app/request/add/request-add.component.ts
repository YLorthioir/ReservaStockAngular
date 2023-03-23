import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Room} from "../../models/room/room";
import {RoomService} from "../../service/room.service";
import {RequestService} from "../../service/request.service";
import {Router} from "@angular/router";
import {RequestForm} from "../../models/request/requestForm";
import {MaterialService} from "../../service/material.service";
import {Material} from "../../models/material/material";

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent implements OnInit{
  form: FormGroup;
  rooms!: Room[];
  materials!: Material[];
  constructor(private readonly _roomService: RoomService,
              private readonly _requestService: RequestService,
              private readonly  _materialService: MaterialService,
              private _router: Router){

    this.form = new FormGroup({
      'startTime': new FormControl(''),
      'minutes': new FormControl(false),
      'requestReason': new FormControl(''),
      'room':new FormControl(''),
      'materials': new FormControl('')
    })
  }

  ngOnInit(): void {

    this._roomService.getAll().subscribe({
      next: (rooms) => {
        this.rooms = rooms;
      },
    });
    this._materialService.getAll().subscribe({
      next: (materials) => {
        this.materials = materials;
      },
    });
  }

  onSubmit(){
    if( this.form.valid ){
      const request: RequestForm = {...this.form.value}
      console.log(request)
      this._requestService.add(request).subscribe((response: any) => {
        this._router.navigate(['request']);
      });
    }
  }
}
