import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MaterialComponent } from "./material/material.component";
import { LoginComponent } from "./auth/login/login.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {StudentRegisterComponent} from "./auth/student-register/student-register.component";
import {Page404Component} from "./components/page404/page404.component";
import {UploadFileComponent} from "./upload-file-component/upload-file-component.component";
import {DownloadFileComponent} from "./download-file-component/download-file-component.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AccueilComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'studentRegister', component: StudentRegisterComponent },
  { path: 'room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule) },
  { path: 'request', loadChildren: () => import('./request/request.module').then(m => m.RequestModule) },
  { path: 'auth', loadChildren: () => import('./auth/admin.module').then(m => m.AdminModule) },
  { path: 'upload', component: UploadFileComponent},
  { path: 'download', component: DownloadFileComponent},
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
