import {Component, OnInit} from '@angular/core';
import {Room} from "../../models/room/room";
import {RoomService} from "../../service/room.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-room',
  templateUrl: './roomAll.component.html',
  styleUrls: ['./roomAll.component.css']
})
export class RoomAllComponent implements OnInit{

  rooms?: any;
  loading: boolean = false
  room?: Room;

  constructor(private readonly _roomService: RoomService, private _router: Router) {
  }
  ngOnInit(): void {
    this.loading = true;

    this._roomService.getAll().subscribe({
      next: (rooms) => {
        this.rooms = rooms;
        this.loading = false;
      }
    })
  }

  onDetails(id: number){
    this._router.navigate(['room', id]);
  }
}
