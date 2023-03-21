import {Component, OnInit} from '@angular/core';
import {MaterialService} from "../service/material.service";

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit{

  materials?: any;
  loading: boolean = false
  materialName: string='';
  httpStatus: number = 200;

  constructor(private readonly _materialService: MaterialService) {
  }
  ngOnInit(): void {
    this.loading = true;

    this._materialService.getAll().subscribe({
      next: (materials) => {
        this.materials = materials;
        this.loading = false;
      },
      error: (error) => {
        if (error.status === 403){
          this.httpStatus = 403;
        }
      }
    })
  }

  refreshMaterial(): void{
    this.loading = true;

    this._materialService.getAll().subscribe({
      next: (materials) => {
        this.materials = materials;
        this.loading = false;
      }
    })
  }

  addMaterial(name: string){
    this._materialService.add(name).subscribe((response: any) => {
      console.log(response);
      this.refreshMaterial();
    });
  }

  removeMaterial(id: number){
    this._materialService.remove(id).subscribe((response: any) => {
      console.log(response);
      this.refreshMaterial();
    });
  }
}
