import { PeopleRegistrationComponent } from './people-registration.component';
import { Routes, RouterModule } from '@angular/router';

const routespeopleRegistration: Routes = [  
  {
    path:'',
    component: PeopleRegistrationComponent
  }
];

export const RoutingPeopleRegistration = RouterModule.forChild(routespeopleRegistration);
