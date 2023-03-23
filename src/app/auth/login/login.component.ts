import { Component } from '@angular/core';
import {Login} from "../../models/auth/login";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:Login = {
    login: '',
    password: ''
  }
  constructor(private readonly authService: AuthService, private _router: Router){}

  connexion(){
    this.authService.login(this.loginForm).subscribe({next: (response: any) => {
      localStorage.setItem("token", response.token);
      localStorage.setItem("login", response.login);
      localStorage.setItem("roles", response.roles.toString());
      this.authService.connected();
      this._router.navigate(['home']);
      }});
  }

  register(){
    this._router.navigate(['studentRegister'])
  }

  forgotten(){
    this.authService.sendNewPasswordRequest(this.loginForm).subscribe({
      next: (response: any) => {
        console.log(response);
        this._router.navigate(['home']);
      }
    })
  }

}
