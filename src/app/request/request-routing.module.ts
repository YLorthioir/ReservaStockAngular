import { NgModule } from '@angular/core';
import {CanActivateChildFn, CanActivateFn, RouterModule, Routes} from "@angular/router";
import {RequestComponent} from "./request/request.component";
import {RequestAllComponent} from "./all/request-all.component";
import {RequestAllUnconfirmedComponent} from "./all-unconfirmed/requestAll-unconfirmed.component";
import {RequestAddComponent} from "./add/request-add.component";
import {RequestConfirmComponent} from "./confirm/request-confirm.component";
import {RequestOneComponent} from "./one/request-one.component";
import {RequestDeleteComponent} from "./delete/request-delete.component";
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
    component: RequestComponent,
    canActivateChild: [childGuard],
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: RequestAllComponent },
      { path: 'allUnconfirmed', component : RequestAllUnconfirmedComponent },
      { path: 'add', component: RequestAddComponent },
      { path: ':param/confirm', component: RequestConfirmComponent, canActivate:[minMaxGuard('param',0,1000)], canMatch: [numberParamGuard('param')]},
      { path: ':param', component: RequestOneComponent, canActivate:[minMaxGuard('param',0,1000)], canMatch: [numberParamGuard('param')]},
      { path: ':param', component: RequestDeleteComponent, canActivate:[minMaxGuard('param',0,1000)], canMatch: [numberParamGuard('param')]},

    ]
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
