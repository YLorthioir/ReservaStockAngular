import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoomService} from "../../service/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../service/request.service";
import {Room} from "../../models/room/room";
import {ConfirmForm} from "../../models/request/confirmForm";
import {AuthService} from "../../service/auth.service";

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
  roleConnected?: string;

  constructor(private readonly _roomService: RoomService,
              private readonly _requestService: RequestService,
              private readonly _authService: AuthService,
              private _router: Router,
              route: ActivatedRoute,
              builder: FormBuilder) {
    this.index = route.snapshot.params['param'];

    this.form = builder.group(ConfirmForm);
  }

  ngOnInit(): void {

    this.roleConnected = this._authService.roleConnected.getValue()

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
      this._requestService.confirm(this.form.value, this.request.id).subscribe((response) => {
        this.form.reset();
        if(response.toString() === "ACCEPTED"){
          alert("La demande a été refusée!")
        }
        this._router.navigate(['request']);
      });
    }
  }
}
