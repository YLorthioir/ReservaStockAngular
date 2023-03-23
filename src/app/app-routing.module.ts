import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MaterialComponent } from "./material/material.component";
import { LoginComponent } from "./auth/login/login.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {RegisterComponent} from "./auth/register/register.component";
import {StudentRegisterComponent} from "./auth/student-register/student-register.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AccueilComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'studentRegister', component: StudentRegisterComponent },
  { path: 'room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule) },
  { path: 'request', loadChildren: () => import('./request/request.module').then(m => m.RequestModule) },
  { path: 'auth', loadChildren: () => import('./auth/admin.module').then(m => m.AdminModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
