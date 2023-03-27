import {Component, OnInit} from '@angular/core';
import {MaterialService} from "../service/material.service";
import {AuthService} from "../service/auth.service";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name','action'];
  materials?: any;
  loading: boolean = false
  materialName: string='';

  roleConnected?: string;

  constructor(private readonly _materialService: MaterialService, private readonly _authService: AuthService) {
  }
  ngOnInit(): void {
    this.roleConnected = this._authService.roleConnected.getValue();

    this.loading = true;

    this._materialService.getAll().subscribe({
      next: (materials) => {
        this.materials = materials;
        this.loading = false;
      },
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
    this._materialService.remove(id).subscribe((response) => {
      console.log(response)
      if(response.toString()==='BAD_REQUEST')
        alert("Vous ne pouvez pas supprimer un matériel utilisé!")
      else if(response.toString()==='INTERNAL_SERVER_ERROR')
        alert("Une erreur inconnue s'est produite")
      this.refreshMaterial();
    });
  }
}
