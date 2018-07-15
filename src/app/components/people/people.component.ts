import { Component, OnInit } from '@angular/core';
import { HttpPeopleService } from '../../httpWrapperModule/http_people.service';
import { UrlResponseCodes } from '../../core/constants';
import { debug } from 'util';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public peopleList: any;
  constructor(private peopleHttpService: HttpPeopleService) { }

  ngOnInit() {
    this.peopleHttpService.getPeoples(this, true);
  }

  deleteUser(id) {
    this.peopleHttpService.deletePeople(id, this, true);
  }

  onSuccess(type: any, responsedata: any) {
    debugger;
    switch (type) {
      case UrlResponseCodes.peopleGet:
        this.peopleList = responsedata;
        break;
      case UrlResponseCodes.peopleDelete:
        for (let i = 0; i < this.peopleList.length; i++) {
          if (this.peopleList[i]._id == responsedata._id) {
            this.peopleList.splice(i, 1);
          }
        }
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
