import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../models/room/room";
import {RoomForm} from "../models/room/roomForm";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private readonly _httpClient: HttpClient, private readonly _authService: AuthService) { }

  getAll(){
    return this._httpClient.get<Room[]>('http://localhost:8080/room/all', {headers: this._authService.getCredentials()})
  }

  getOne(id: number){
    return this._httpClient.get<Room>('http://localhost:8080/room/'+id, {headers: this._authService.getCredentials()})
  }

  add(room: RoomForm){
    return this._httpClient.post<Room>('http://localhost:8080/room/add',room, {headers: this._authService.getCredentials()})
  }

  update(room: RoomForm, id: number){
    return this._httpClient.put<Room>('http://localhost:8080/room/'+ id, room, {headers: this._authService.getCredentials()})
  }

}
