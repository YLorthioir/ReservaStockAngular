import { NgModule } from '@angular/core';
import {CanActivateChildFn, CanActivateFn, RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {RegisterComponent} from "./register/register.component";
import {ToValidateComponent} from "./to-validate/to-validate.component";

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
    component: AdminComponent,
    canActivateChild: [childGuard],
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent},
      { path: 'toValidate', component: ToValidateComponent},

    ]
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
