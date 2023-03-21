import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import {MaterialComponent} from "./material/material.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AccueilComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
