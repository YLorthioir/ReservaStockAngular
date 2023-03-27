import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Room} from "../../models/room/room";
import {RoomService} from "../../service/room.service";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";

@Component({
  selector: 'app-room',
  templateUrl: './roomAll.component.html',
  styleUrls: ['./roomAll.component.css']
})
export class RoomAllComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['name', 'capacity','for staff', 'more infos'];
  rooms?: any;
  loading: boolean = false
  room?: Room;
  roleConnected?: string;

  constructor(private readonly _roomService: RoomService, private _router: Router, private readonly _authService: AuthService,
              private _liveAnnouncer: LiveAnnouncer) {
  }
  ngOnInit(): void {
    this.roleConnected = this._authService.roleConnected.getValue()
    this.load()
  }

  @ViewChild(MatSort) sort?: MatSort;

  ngAfterViewInit() {
    this.rooms.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
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
