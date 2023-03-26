import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Room} from "../../models/room/room";
import {RoomService} from "../../service/room.service";
import {RequestService} from "../../service/request.service";
import {Router} from "@angular/router";
import {RequestForm} from "../../models/request/requestForm";
import {MaterialService} from "../../service/material.service";
import {Material} from "../../models/material/material";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent implements OnInit{
  form: FormGroup;
  rooms!: Room[];
  materials!: Material[];
  roleConnected?: string;
  constructor(private readonly _roomService: RoomService,
              private readonly _requestService: RequestService,
              private readonly  _materialService: MaterialService,
              private readonly _authService: AuthService,
              private _router: Router,
              builder: FormBuilder){

    this.form = builder.group(RequestForm);
  }

  ngOnInit(): void {

    this.roleConnected = this._authService.roleConnected.getValue()

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
      this._requestService.add(this.form.value).subscribe((response) => {
        this.form.reset();
        if(response.toString() === "CREATED"){
          alert("Votre demande a été envoyée et est en attente de validation")
        } else if(response.toString() === "ACCEPTED"){
          alert("Votre demande a été refusée!")
        }

        this._router.navigate(['request']);
      });
    }
  }
}
