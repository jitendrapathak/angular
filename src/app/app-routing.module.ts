import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-gaurd-module/auth-gaurd.service';
import { AuthGuardLoginCheckService } from './auth-gaurd-module/auth-gaurd-login-check.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/components/people/people.module#PeopleModule',
    data: {
      title: ''
    }
  },
  {
    path: 'people',
    loadChildren: 'app/components/people/people.module#PeopleModule',
    data: {
      title: ''
    }
  },
  {
    path: 'people-registration',
    loadChildren: 'app/components/people-registration/people-registration.module#PeopleRegistrationModule',
    data: {
      title: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
