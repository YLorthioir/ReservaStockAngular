import { Injectable } from '@angular/core';
import { Material } from "../models/material";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private readonly _httpClient: HttpClient) { }

  getAll(){
    return this._httpClient.get<Material[]>('http://localhost:8080/material/all')
  }

  add(name: string){
    return this._httpClient.post<string>('http://localhost:8080/material/add', name)
  }

  remove(id: number){
    return this._httpClient.delete('http://localhost:8080/material/'+id)
  }
}
