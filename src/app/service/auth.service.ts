import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../models/auth/login";
import {BehaviorSubject} from "rxjs";
import {FormGroup} from "@angular/forms";
import {User} from "../models/user/user";
import {RegisterForm} from "../models/auth/registerForm";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  source= new BehaviorSubject<boolean>(this.isConnected());
  connectedSource = this.source.asObservable();
  roleConnected = new BehaviorSubject<string>(localStorage.getItem("roles")!);

  constructor(private readonly _httpClient: HttpClient) {
    this.roleConnected.next(localStorage.getItem("roles")!);
  }

  connected(){
    if(!this.source.value){
      this.source.next(true);
      this.roleConnected.next(localStorage.getItem("roles")!);
    }
  }

  disconnect() {
    if(this.source.value){
      this.source.next(false)
      localStorage.clear()
      this.roleConnected.next(localStorage.getItem("roles")!);
    }

  }

  isConnected() :boolean{
    if(localStorage.length===0)
      return false
    else
      return true
  }

  login(login: FormGroup) {
    return this._httpClient.post('http://localhost:8080/auth/login', login,{headers: this.getCredentials()})
  }
  register(registerForm: RegisterForm){
    return this._httpClient.post('http://localhost:8080/auth/register',registerForm,{headers: this.getCredentials()})
  }

  studentRegister(registerForm: RegisterForm){
    console.log(registerForm)
    return this._httpClient.post('http://localhost:8080/auth/studentRegister',registerForm,{headers: this.getCredentials()})
  }

  getAllUnvalidate(){
    return this._httpClient.get<User>('http://localhost:8080/auth/toValidate',{headers: this.getCredentials()})
  }

  validate(id: number){
    return this._httpClient.post('http://localhost:8080/auth/validate/'+id,"",{headers: this.getCredentials()})
  }

  sendNewPasswordRequest(loginForm: Login){
    return this._httpClient.post('http://localhost:8080/auth/sendNewPasswordRequest', loginForm.login,{headers: this.getCredentials()})
  }

  getCredentials():HttpHeaders{
    if(this.isConnected()){
        return new HttpHeaders({
          Authorization: localStorage.getItem('token')!
        })
    } else return new HttpHeaders();
  }

  isAuthorized(login: string):boolean{
    return localStorage.getItem('login')===login
  }
}
