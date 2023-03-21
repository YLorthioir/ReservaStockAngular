import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../models/room";
import {RoomForms} from "../models/roomForms";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private readonly _httpClient: HttpClient) { }

  getAll(){
    return this._httpClient.get<Room[]>('http://localhost:8080/room/all')
  }

  getOne(id: number){
    return this._httpClient.get<Room>('http://localhost:8080/room/'+id)
  }

  add(room: RoomForms){
    return this._httpClient.post<Room>('http://localhost:8080/room/add', JSON.stringify(room))
  }

  update(room: Room){
    return this._httpClient.put<Room>('http://localhost:8080/room/'+ room.id, room)
  }

}
