import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../service/request.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-request-one',
  templateUrl: './request-one.component.html',
  styleUrls: ['./request-one.component.css']
})
export class RequestOneComponent implements OnInit{

  loading: boolean = false
  request!: any;
  index!: number;
  roleConnected?: string;
  authorized!: boolean;

  constructor(private readonly _requestService: RequestService,
              private readonly  _authService: AuthService,
              route: ActivatedRoute) {
    this.index = route.snapshot.params['param'];
  }
  ngOnInit(): void {
    this.roleConnected = this._authService.getRoleConnected();
    this.loading = true;
    this._requestService.getOne(this.index).subscribe({
      next: (request) => {
          this.request = request;
          this.loading = false;
          this.authorized=this._authService.isAuthorized(this.request.userDTO.login)
      }
    })
  }
}
