import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../service/request.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-request-all',
  templateUrl: './request-all.component.html',
  styleUrls: ['./request-all.component.css']
})
export class RequestAllComponent implements OnInit{

  requests!: any;
  loading: boolean = false;
  roleConnected?: string;

  constructor(private readonly _requestService: RequestService,
              private readonly _authService: AuthService,
              private _router: Router) {
  }
  ngOnInit(): void {

    this.roleConnected = this._authService.roleConnected.getValue()

    if (this.roleConnected != undefined){
      this.loading = true;

      this._requestService.getAllByUser().subscribe({
        next: (requests) => {
          this.requests = requests;
          this.loading = false;
        }
      })
    }
  }

  refresh(){
    this.roleConnected = this._authService.roleConnected.getValue()

    if (this.roleConnected != undefined){
      this.loading = true;

      this._requestService.getAllByUser().subscribe({
        next: (requests) => {
          this.requests = requests;
          this.loading = false;
        }
      })
    }
  }
  onDetails(id: number){
    this._router.navigate(['request', id]);
  }

  toDelete(id: number) {
    this._requestService.delete(id).subscribe((response: any) => {
      this.refresh();
    });
  }
}
