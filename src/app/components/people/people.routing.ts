import { PeopleComponent } from './people.component';
import { Routes, RouterModule } from '@angular/router';

const routesPeople: Routes = [  
  {
    path:'',
    component: PeopleComponent
  }
];

export const RoutingPeople = RouterModule.forChild(routesPeople);
