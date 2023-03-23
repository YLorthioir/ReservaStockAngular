import {Material} from "../material/material";
import {Room} from "../room/room";

export interface RequestForm{
  startTime: Date;
  minutes: number;
  requestReason: string;
  roomId: number;
  materials: Material[];
}
