import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {

  roleConnected: string;

  constructor(private readonly _authService: AuthService){
    this.roleConnected =this._authService.getRoleConnected()
  }

}
