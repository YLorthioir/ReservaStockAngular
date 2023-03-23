import {Material} from "../material/material";

export interface Room{
  id: number;
  capacity:number;
  name: string;
  forStaff: boolean;
  contains: Material[];
}
