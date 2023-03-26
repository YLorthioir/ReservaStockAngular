import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-to-validate',
  templateUrl: './to-validate.component.html',
  styleUrls: ['./to-validate.component.css']
})
export class ToValidateComponent implements OnInit{

  unValidateUsers?: any;
  loading: boolean = false
  roleConnected?: string;

  constructor(private readonly _authService: AuthService) {
  }
  ngOnInit(): void {
    this.roleConnected = this._authService.roleConnected.getValue();
    this.loading = true;

    this._authService.getAllUnvalidate().subscribe({
      next: (users) => {
        this.unValidateUsers = users;
        this.loading = false;
      }
    })
  }

  validate(id: number){
    this._authService.validate(id).subscribe((response: any) => {
      console.log(response);
    });
  }
}
