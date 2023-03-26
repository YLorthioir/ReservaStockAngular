import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  constructor(private readonly authService: AuthService, private _router: Router){
    this.form = new FormGroup({
      'login': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required]),
    })
  }

  connexion(){
    if( this.form.valid){
      localStorage.clear();
      this.authService.login(this.form.value).subscribe({next: (response: any) => {
          localStorage.setItem("token", response.token);
          localStorage.setItem("login", response.login);
          localStorage.setItem("roles", response.roles.toString());
          this.authService.connected();
          this._router.navigate(['home']);
        },
        error:() =>{
          alert("Login ou mot de passe invalides!");
        }});
    }
  }

  register(){
    this._router.navigate(['studentRegister'])
  }

  forgotten(){
    this.authService.sendNewPasswordRequest(this.form.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this._router.navigate(['home']);
      }
    })
  }

}
