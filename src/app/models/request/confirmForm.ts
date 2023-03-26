import {Validators} from "@angular/forms";

export interface ConfirmForm{
  refusalReason: string;
  valid: boolean;
  room: number;
}

export const ConfirmForm ={
  refusalReason: ['',[Validators.minLength(5), Validators.maxLength(100)]],
  valid: [],
  room: [],
}
