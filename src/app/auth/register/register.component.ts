import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;

  roles: string[] = ['ADMIN','PROFESSOR','STUDENT']
  constructor(private readonly _authService: AuthService,
              private _router: Router){

    this.form = new FormGroup({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'password': new FormControl(''),
      'confirmPassword':new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl(''),
      'number': new FormControl(''),
      'street': new FormControl(''),
      'postCode': new FormControl(''),
      'city': new FormControl(''),
      'country': new FormControl(''),
      'birthdate': new FormControl(''),
      'roles': new FormControl(''),
    })
  }

  onSubmit(){
    if( this.form.valid ){
      this._authService.register(this.form).subscribe((response: any) => {
        console.log(response);
      });
        this.form.reset({
          'firstName': new FormControl(''),
          'lastName': new FormControl(''),
          'password': new FormControl(''),
          'confirmPassword': new FormControl(''),
          'email': new FormControl(''),
          'phone': new FormControl(''),
          'number': new FormControl(''),
          'street': new FormControl(''),
          'postCode': new FormControl(''),
          'city': new FormControl(''),
          'country': new FormControl(''),
          'birthdate': new FormControl(''),
          'roles': new FormControl(''),
        })
    }
  }
}
