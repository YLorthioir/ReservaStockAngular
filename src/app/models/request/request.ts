import {Material} from "../material/material";
import {User} from "../user/user";
import {Room} from "../room/room";

export interface Request{
  id: number;
  startTime: Date;
  minutes: number;
  requestReason: string;
  refusalReason: string;
  userDTO: User;
  adminId: number;
  roomDTO: Room;
  materials: Material[];
}

