import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {Login} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connectedUser?: User;

  constructor(private readonly _httpClient: HttpClient) { }

  connect(loginForm: Login) {
    return this._httpClient.post('http://localhost:8080/auth/login', JSON.stringify(loginForm))
  }

  disconnect() {
    this.connectedUser = undefined;
  }
}
