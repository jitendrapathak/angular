import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRegistrationComponent } from './people-registration.component';
import { RoutingPeopleRegistration } from './people-registration.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    RoutingPeopleRegistration
  ],
  declarations: [PeopleRegistrationComponent]
})
export class PeopleRegistrationModule { }
