import { Injectable } from '@angular/core';
import { Material } from "../models/material/material";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private readonly _httpClient: HttpClient, private readonly _authService: AuthService) { }

  getAll(){
    return this._httpClient.get<Material[]>('http://localhost:8080/material/all',{headers: this._authService.getCredentials()})
  }

  add(name: string){
    return this._httpClient.post<string>('http://localhost:8080/material/add', name,{headers: this._authService.getCredentials()})
  }

  remove(id: number){
    return this._httpClient.delete('http://localhost:8080/material/'+id,{headers: this._authService.getCredentials()})
  }
}
