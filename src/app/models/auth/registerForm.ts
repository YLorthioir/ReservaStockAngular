import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export interface RegisterForm {
  lastname: string;
  firstname: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
  number: string;
  street: string;
  postCode: number;
  city: string;
  country: string;
  birthdate: Date;
  roles: string[];
}

export const RegisterForm ={
  lastName: ['',[Validators.minLength(3),Validators.maxLength(30),Validators.required]],
  firstName: ['',[Validators.minLength(3),Validators.maxLength(30),Validators.required]],
  password: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]],
  confirmPassword: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]],
  email: ['',[Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),Validators.required]],
  phone: ['',[Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/),Validators.required]],
  number: ['',[Validators.minLength(1), Validators.maxLength(4),Validators.required]],
  street: ['',[Validators.minLength(5), Validators.maxLength(100),Validators.required]],
  postCode: ['',[Validators.min(1000),Validators.max(99999),Validators.required]],
  city: ['',[Validators.minLength(5), Validators.maxLength(100),Validators.required]],
  country: ['',[Validators.minLength(5), Validators.maxLength(100),Validators.required]],
  birthdate: ['',[Validators.required]],
  role: ['STUDENT',[Validators.required]]
};
