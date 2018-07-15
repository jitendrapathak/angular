import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import {RoutingPeople} from './people.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RoutingPeople,
    NgbModule.forRoot()
  ],
  declarations: [PeopleComponent]
})
export class PeopleModule { }
