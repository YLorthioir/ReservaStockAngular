import {Component, OnInit} from '@angular/core';
import {RoomForm} from "../../models/room/roomForm";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoomService} from "../../service/room.service";
import {MaterialService} from "../../service/material.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-create',
  templateUrl: './roomCreate.component.html',
  styleUrls: ['./roomCreate.component.css']
})
export class RoomCreateComponent implements OnInit{

form: FormGroup;
materials!: any;
roleConnected?: string;

constructor(private readonly _roomService: RoomService,
            private readonly _materialService: MaterialService,
            private readonly _authService: AuthService,
            builder: FormBuilder) {
  this.form = builder.group(RoomForm);
}

  ngOnInit(): void {

    this.roleConnected = this._authService.roleConnected.getValue()

    this._materialService.getAll().subscribe({
      next: (materials) => {
        this.materials = materials;
      },
    })
  }

  onSubmit(){
    if( this.form.valid ){
      this._roomService.add(this.form.value).subscribe(() => {
        this.form.reset();
      });
    }
  }

}
