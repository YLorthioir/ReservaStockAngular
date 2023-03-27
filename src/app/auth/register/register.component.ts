import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {RegisterForm} from "../../models/auth/registerForm";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  roleConnected?: string;
  hide = true;
  constructor(private readonly _authService: AuthService,
              private _router: Router,
              builder: FormBuilder){
    this.roleConnected = this._authService.roleConnected.getValue()
    this.form = builder.group(RegisterForm);
  }

  onSubmit(){
    if( this.form.valid ){
      console.log(this.form);
      this._authService.register(this.form.value).subscribe(() => {
        if(HttpStatusCode.Created)
          alert("Demande crée")
        this.form.reset();
      });
    }
  }
}
