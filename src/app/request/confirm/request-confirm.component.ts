import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
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
  form2: FormGroup;
  request!: any;
  rooms!: Room[];
  index!: number;
  roleConnected?: string;
  checked ?: boolean;

  constructor(private readonly _roomService: RoomService,
              private readonly _requestService: RequestService,
              private readonly _authService: AuthService,
              private _router: Router,
              route: ActivatedRoute,
              builder: FormBuilder) {
    this.index = route.snapshot.params['param'];

    this.form = builder.group(ConfirmForm);

    this.form2 = new FormGroup({
      'accepted': new FormControl(false)
    })

    this.form2.get('accepted')?.valueChanges.subscribe((value) => {
      this.checked=value;
    })
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
      this._requestService.confirm(this.form.value, this.request.id)
        .subscribe((response) => {
          this.form.reset();
          if(response.toString() === "ACCEPTED"){
            alert("The request was denied!")
          }
          this._router.navigate(['request']);
      });
    }
  }
}
