import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../models/auth/login";
import {RegisterForm} from "../models/auth/registerForm";
import {BehaviorSubject} from "rxjs";
import {FormGroup} from "@angular/forms";
import {User} from "../models/user/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  source= new BehaviorSubject<boolean>(this.isConnected());
  connectedSource = this.source.asObservable();
  roleConnected: string;

  constructor(private readonly _httpClient: HttpClient) {
    this.roleConnected=this.getRoleConnected();
  }

  getRoleConnected():string{
    return localStorage.getItem("roles")!
  }

  connected(){
    if(!this.source.value){
      this.source.next(true);
      this.roleConnected=this.getRoleConnected();
    }
  }

  disconnect() {
    if(this.source.value){
      this.source.next(false)
      localStorage.clear()
      this.roleConnected=this.getRoleConnected();
    }

  }

  isConnected() :boolean{
    if(localStorage.length===0)
      return false
    else
      return true
  }

  login(loginForm: Login) {
    return this._httpClient.post('http://localhost:8080/auth/login', loginForm,{headers: this.getCredentials()})
  }
  register(registerForm: FormGroup){
    return this._httpClient.post('http://localhost:8080/auth/register',registerForm,{headers: this.getCredentials()})
  }

  studentRegister(registerForm: FormGroup){
    return this._httpClient.post('http://localhost:8080/auth/studentRegister',registerForm,{headers: this.getCredentials()})
  }

  getAllUnvalidate(){
    return this._httpClient.get<User>('http://localhost:8080/auth/toValidate',{headers: this.getCredentials()})
  }

  validate(id: number){
    return this._httpClient.post('http://localhost:8080/auth/validate/'+id,"",{headers: this.getCredentials()})
  }

  sendNewPasswordRequest(loginForm: Login){
    return this._httpClient.post('http://localhost:8080/auth/sendNewPasswordRequest', loginForm,{headers: this.getCredentials()})
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
