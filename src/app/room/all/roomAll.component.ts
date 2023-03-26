import {Component, OnDestroy, OnInit} from '@angular/core';
import {Room} from "../../models/room/room";
import {RoomService} from "../../service/room.service";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-room',
  templateUrl: './roomAll.component.html',
  styleUrls: ['./roomAll.component.css']
})
export class RoomAllComponent implements OnInit{

  rooms?: any;
  loading: boolean = false
  room?: Room;
  roleConnected?: string;

  constructor(private readonly _roomService: RoomService, private _router: Router, private readonly _authService: AuthService) {
  }
  ngOnInit(): void {
    this.roleConnected = this._authService.roleConnected.getValue()
    this.load()
  }

  load(){
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
