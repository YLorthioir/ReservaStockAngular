import { Component } from '@angular/core';
import {Login} from "../../models/login";
import {AuthService} from "../../service/auth.service";
import {UserConnected} from "../../models/userConnected";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userConnected?: UserConnected;
  loginForm:Login = {
    login: '',
    password: ''
  }
  constructor(private readonly authService: AuthService){}

  connexion(){
    this.authService.connect(this.loginForm).subscribe({next: (response: any) => {
      console.log((JSON.parse(response)));
      // this.userConnected = response.body;
      // console.log(this.userConnected);
    }});
  }
}
