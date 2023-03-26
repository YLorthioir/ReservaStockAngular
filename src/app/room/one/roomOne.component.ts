import {Component, OnInit} from '@angular/core';
import {Room} from "../../models/room/room";
import {RoomService} from "../../service/room.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-one',
  templateUrl: './roomOne.component.html',
  styleUrls: ['./roomOne.component.css']
})
export class RoomOneComponent implements OnInit{

  loading: boolean = false
  room!: Room;
  index!: number;
  roleConnected?: string;

  constructor(private readonly _roomService: RoomService, route: ActivatedRoute, private readonly _authService: AuthService) {
    this.index = route.snapshot.params['param'];
  }
  ngOnInit(): void {

    this.roleConnected = this._authService.roleConnected.getValue()

    this.loading = true;
    this._roomService.getOne(this.index).subscribe({
      next: (room) => {
        this.room = room;
        this.loading = false;
      }
    })
  }
}
