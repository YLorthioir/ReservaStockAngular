import { Injectable } from '@angular/core';
import {HttpClient, HttpStatusCode} from "@angular/common/http";
import {RequestForm} from "../models/request/requestForm";
import {ConfirmForm} from "../models/request/confirmForm";
import {AuthService} from "./auth.service";
import {Room} from "../models/room/room";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

    constructor(private readonly _httpClient: HttpClient,  private readonly _authService: AuthService) {
    }

    getAll(){
      return this._httpClient.get<Request[]>('http://localhost:8080/request/allUnconfirmed',{headers: this._authService.getCredentials()})
    }

    getAllByUser(){
      return this._httpClient.get<Request[]>('http://localhost:8080/request/all',{headers: this._authService.getCredentials()})
    }

    getOne(id: number){
      return this._httpClient.get<Request>('http://localhost:8080/request/'+id,{headers: this._authService.getCredentials()})
    }

    add(request: RequestForm){
      return this._httpClient.post<HttpStatusCode>('http://localhost:8080/request/add',request, {headers: this._authService.getCredentials()})
    }

    confirm(confirm: ConfirmForm, id: number){
      return this._httpClient.patch<HttpStatusCode>('http://localhost:8080/request/'+ id +'/confirm', confirm, {headers: this._authService.getCredentials()})
    }

    delete(id: number){
      return this._httpClient.delete<number>('http://localhost:8080/request/' +id, {headers: this._authService.getCredentials()})
    }

    freeRooms(id: number){
      return this._httpClient.get<Room[]>('http://localhost:8080/request/freeRooms/' +id,{headers: this._authService.getCredentials()})
    }

}
