import {Component, OnInit} from '@angular/core';
import {Room} from "../../models/room/room";
import {RoomService} from "../../service/room.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-one',
  templateUrl: './roomOne.component.html',
  styleUrls: ['./roomOne.component.css']
})
export class RoomOneComponent implements OnInit{

  loading: boolean = false
  room!: Room;
  index!: number;

  constructor(private readonly _roomService: RoomService, route: ActivatedRoute) {
    this.index = route.snapshot.params['param'];
  }
  ngOnInit(): void {
    this.loading = true;
    this._roomService.getOne(this.index).subscribe({
      next: (room) => {
        this.room = room;
        this.loading = false;
      }
    })
  }
}
