import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidationService } from '../common/validation-message-component/validation-service.service';
import { HttpPeopleService } from '../../httpWrapperModule/http_people.service';
import { UrlResponseCodes } from '../../core/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-registration',
  templateUrl: './people-registration.component.html',
  styleUrls: ['./people-registration.component.scss']
})
export class PeopleRegistrationComponent implements OnInit {

  saveUserForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private peopleHttpService: HttpPeopleService, private router: Router) { }

  ngOnInit() {
    this.saveUserForm = this.formbuilder.group({
      'name': ['', Validators.required],
      'age': ['', [Validators.required, ValidationService.numberPattern, Validators.maxLength(2)]],
      'gender': ['Male'],
      'address': [''],
      'qualification': ['', Validators.required],
      'occupation': ['', Validators.required]
    });
  }

  save() {
    if (this.saveUserForm.valid) {
      let userData = {
        "name": this.saveUserForm.value.name.trim(),
        "age": this.saveUserForm.value.age.trim(),
        "gender": this.saveUserForm.value.gender,
        "address": this.saveUserForm.value.address.trim(),
        "qualification": this.saveUserForm.value.qualification.trim(),
        "occupation": this.saveUserForm.value.occupation.trim(),
      };
      this.router.navigateByUrl('/people');
      this.peopleHttpService.savePeople(userData, this, true);
    }
    else {
      this.markFormGroupTouched(this.saveUserForm)
    }
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    try {
      (<any>Object).values(formGroup.controls).forEach(control => {
        control.markAsTouched();
        if (control.controls) {
          control.controls.forEach(c => this.markFormGroupTouched(c));
        }
      });
    }
    catch (ex) {
      // Code to handle exception
    }
  }

  onSuccess(type: any, responsedata: any) {
    switch (type) {
      case UrlResponseCodes.peopleGet:        
        break;
    }
  }

  onFailure(type: any, response: string) {
    switch (type) {
      case UrlResponseCodes.peopleGet:
        break;
    }
  }

}
