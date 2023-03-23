import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RequestService} from "../../service/request.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-all-unconfirmed',
  templateUrl: './requestAll-unconfirmed.component.html',
  styleUrls: ['./requestAll-unconfirmed.component.css']
})
export class RequestAllUnconfirmedComponent implements OnInit{

  requests!: any;
  loading: boolean = false
  roleConnected?: string;

  constructor(private readonly _requestService: RequestService,
              private readonly _authService: AuthService,
              private _router: Router) {
  }
  ngOnInit(): void {

    this.roleConnected = this._authService.getRoleConnected()

    if (this.roleConnected === 'ADMIN'){
      this.loading = true;

      this._requestService.getAll().subscribe({
        next: (requests) => {
          this.requests = requests;
          this.loading = false;
        }
      })
    }
  }

  toConfirm(id: number){
    this._router.navigate(['request', id, 'confirm']);
  }
  toDelete(id: number) {
    this._requestService.delete(id).subscribe((response: any) => {
      this.refresh();
    });
  }

  refresh(){
    this.roleConnected = this._authService.getRoleConnected()

    if (this.roleConnected === 'ADMIN'){
      this.loading = true;

      this._requestService.getAll().subscribe({
        next: (requests) => {
          this.requests = requests;
          this.loading = false;
        }
      })
    }
  }
}
