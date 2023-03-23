import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  isConnected ?:boolean;
  role?: string;

  constructor(private readonly _authService: AuthService) {
    _authService.connectedSource.subscribe(b => {
      this.isConnected = b;
      this.role = _authService.roleConnected;
    })
  }
}
