import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {RegisterForm} from "../../models/auth/registerForm";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'app-admin-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
  form: FormGroup;
  hide = true;
  constructor(private readonly _authService: AuthService,
              private _router: Router,
              builder: FormBuilder){

    this.form = builder.group(RegisterForm);
  }

  onSubmit(){
    if( this.form.valid ){
      this._authService.studentRegister(this.form.value).subscribe(() => {
        if(HttpStatusCode.Created)
          alert("Demande crée")
      });
    }
  }
}
