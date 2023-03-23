import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RoomService} from "../../service/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../service/request.service";
import {Room} from "../../models/room/room";
import {ConfirmForm} from "../../models/request/confirmForm";

@Component({
  selector: 'app-request-confirm',
  templateUrl: './request-confirm.component.html',
  styleUrls: ['./request-confirm.component.css']
})
export class RequestConfirmComponent implements OnInit{
  form: FormGroup;
  request!: any;
  rooms!: Room[];
  index!: number;

  constructor(private readonly _roomService: RoomService,
              private readonly _requestService: RequestService,
              private _router: Router,
              route: ActivatedRoute) {
    this.index = route.snapshot.params['param'];

    this.form = new FormGroup({
      'refusalReason': new FormControl(''),
      'valid': new FormControl(false),
      'room': new FormControl(''),
    })
  }

  ngOnInit(): void {

    this._requestService.freeRooms(this.index).subscribe({
      next: (rooms) => {
        this.rooms = rooms;
      },
    });

    this._requestService.getOne(this.index).subscribe({
      next: (request) => {
        this.request = request
      }
    })
  }

  onSubmit(){
    if( this.form.valid ){
      const confirmation: ConfirmForm = {...this.form.value}
      this._requestService.confirm(confirmation, this.request.id).subscribe((response: any) => {
        this._router.navigate(['request']);
      });
    }
  }
}
