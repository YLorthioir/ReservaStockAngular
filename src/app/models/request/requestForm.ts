import {Material} from "../material/material";
import {Validators} from "@angular/forms";

export interface RequestForm{
  startTime: Date;
  minutes: number;
  requestReason: string;
  roomId: number;
  materials: Material[];
}

export const RequestForm ={
  startTime: [],
  minutes: [0,[Validators.min(1)]],
  requestReason: ['',[Validators.minLength(5), Validators.maxLength(100)]],
  room: [],
  materials: [],
}
