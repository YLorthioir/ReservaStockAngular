import {Validators} from "@angular/forms";

export interface RoomForm {
  capacity:number;
  name: string;
  forStaff: boolean;
  contains: number[];
}

export const RoomForm ={
  capacity:['',[Validators.min(0)]],
  name: ['',[Validators.minLength(3),Validators.maxLength(30)]],
  forStaff: [],
  contains: [],
}
