import { NgModule } from '@angular/core';
import {CanActivateChildFn, CanActivateFn, RouterModule, Routes} from "@angular/router";
import {RoomComponent} from "./room/room.component";
import {RoomAllComponent} from "./all/roomAll.component";
import {RoomOneComponent} from "./one/roomOne.component";
import {RoomCreateComponent} from "./create/roomCreate.component";
import {numberParamGuard} from "../guards/common-guard.guard";

function minMaxGuard(paramName: string, min?: number, max?: number): CanActivateFn {
  return (route,state) => {
    const param = parseInt(route.params[paramName]);

    return !isNaN(param) &&
      (!min || param >= min) &&
      (!max || param <= max);
  }
}

const childGuard: CanActivateChildFn = (childRoute, state) => {
  return childRoute.url[0].path !== 'no-activation'
}

const routes: Routes = [

  {
    path: '',
    component: RoomComponent,
    canActivateChild: [childGuard],
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: RoomAllComponent },
      { path: ':param', component: RoomOneComponent, canActivate:[minMaxGuard('param',0,1000)], canMatch: [numberParamGuard('param')]},
      { path: 'add', component: RoomCreateComponent},

    ]
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
