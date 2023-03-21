import {Material} from "./material";

export interface Room{
  id: number;
  capacity:number;
  name: string;
  forStaff: boolean;
  contains: Material[];
}
