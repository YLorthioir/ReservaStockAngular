import {Material} from "../material/material";
import {AbstractControl, ValidatorFn, Validators} from "@angular/forms";
import {RequestAddComponent} from "../../request/add/request-add.component";

export interface RequestForm{
  startTime: Date;
  minutes: number;
  requestReason: string;
  roomId: number;
  materials: Material[];
}

export const RequestForm ={
  startTime: ['',[requestLimit(3),openings(8),week()]],
  minutes: [0,[Validators.min(1)]],
  requestReason: ['',[Validators.minLength(5), Validators.maxLength(100)]],
  room: [],
  materials: [],
}

function requestLimit( days:number ): ValidatorFn{
  return (control: AbstractControl) => {
    let minDate = new Date()
    minDate.setDate( minDate.getDate()+days )
    minDate = new Date( minDate.getFullYear(), minDate.getMonth(), minDate.getDate() )
    const inputValue = new Date(control.value);

    if( inputValue >= minDate )
      return null;
    return {
      notInFuture :"Date is not in the required time"
    }
  }
}

function openings(opening: number):ValidatorFn{
  return (control: AbstractControl) => {
    const inputTime = new Date(control.value);

    if(inputTime.getHours()>=opening){
      return null;
    }
    return {
      timeBeforeOpen : "Time is before opening"
    }
  }
}

function week():ValidatorFn{
  return (control: AbstractControl) => {
    const inputValue = new Date(control.value);

    if(inputValue.getDay() != 6 && inputValue.getDay() !=  0){
      return null;
    }
    return {
      duringWE : "Date is during week end"
    }
  }
}
