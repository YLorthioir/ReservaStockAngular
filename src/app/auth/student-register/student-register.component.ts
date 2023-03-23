import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
  form: FormGroup;
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
      'roles': new FormControl('STUDENT'),
    })
  }

  onSubmit(){
    if( this.form.valid ){
      this._authService.studentRegister(this.form).subscribe((response: any) => {
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
        'roles': new FormControl('STUDENT'),
      })
    }
  }
}
