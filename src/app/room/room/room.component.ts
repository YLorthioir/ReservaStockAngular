import {Component, OnInit} from '@angular/core';
import {MaterialService} from "../../service/material.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit{
  roleConnected?: string;

  constructor(private readonly _authService: AuthService) {
  }

  ngOnInit(): void {
    this.roleConnected = this._authService.roleConnected.getValue()
  }
}
