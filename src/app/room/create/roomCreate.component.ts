import {Component, OnInit} from '@angular/core';
import {RoomForms} from "../../models/roomForms";
import {FormControl, FormGroup} from "@angular/forms";
import {RoomService} from "../../service/room.service";
import {Material} from "../../models/material";
import {MaterialService} from "../../service/material.service";

@Component({
  selector: 'app-create',
  templateUrl: './roomCreate.component.html',
  styleUrls: ['./roomCreate.component.css']
})
export class RoomCreateComponent implements OnInit{

form: FormGroup;
materials!: any;

constructor(private readonly _roomService: RoomService, private readonly _materialService: MaterialService) {
  this.form = new FormGroup({
    'capacity': new FormControl(''),
    'name': new FormControl(''),
    'forStaff': new FormControl(false),
    'material': new FormControl(''),

  })
}

  ngOnInit(): void {

    this._materialService.getAll().subscribe({
      next: (materials) => {
        this.materials = materials;
      },
    })
  }

  onSubmit(){
    if( this.form.valid ){
      const room: RoomForms = {...this.form.value}
      this._roomService.add(room).subscribe((response: any) => {
        console.log(response);
      });
      this.form.reset({
        'capacity': new FormControl(0),
        'name': new FormControl(''),
        'forStaff': new FormControl(false),
        'material': new FormControl(''),
      });
    }
  }

}
