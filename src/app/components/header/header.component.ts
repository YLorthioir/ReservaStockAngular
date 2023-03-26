import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  isConnected ?:boolean;
  role!: Observable<string>;

  constructor(private readonly _authService: AuthService) {
    _authService.connectedSource.subscribe(bool => {
      this.isConnected = bool;
      this.role = _authService.roleConnected.asObservable();
    })
  }

  getRoleConnected():string{
    let roleCo!:string;
    this.role.subscribe(value => roleCo = value)
    return roleCo;
  }
}
