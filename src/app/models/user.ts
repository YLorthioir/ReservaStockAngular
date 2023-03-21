import {Adress} from "./adress";

export class User {
  constructor(
    public id: number,
    public lastName: string,
    public firstName: string,
    public login: string,
    public email: string,
    public phone: string,
    public adress: Adress,
    public role: string,
    public birthdate: Date

  ){}
}
