import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RequestService} from "../../service/request.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-request-all',
  templateUrl: './request-all.component.html',
  styleUrls: ['./request-all.component.css']
})
export class RequestAllComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['capacity', 'date', 'hour', 'minutes', 'status', 'delete'];
  requests!: any;
  loading: boolean = false;
  roleConnected?: string;

  constructor(private readonly _requestService: RequestService,
              private readonly _authService: AuthService,
              private _router: Router,
              private _liveAnnouncer: LiveAnnouncer) {
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

  @ViewChild(MatSort) sort?: MatSort;

  ngAfterViewInit() {
    this.requests.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
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
