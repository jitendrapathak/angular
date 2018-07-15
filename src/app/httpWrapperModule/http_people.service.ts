import { StorageService } from './../core/storage-service.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { HttpWrapper } from './http-wrapper';
import { Constants, UrlConstants, UrlResponseCodes } from '../core/constants';
import { HttpSuccesFailureResponse } from './http_wrapper_response.intreface';
import { ApiResponseModel } from '../core/model/apiResponse.model';
import { FollowRequestModel } from '../core/model/followRequestModel';


@Injectable()
export class HttpPeopleService {


  constructor(private myHttp: HttpWrapper) {
    try {
      myHttp.setHeader(Constants.authToken, StorageService.getToken());
    } catch (e) {
      console.log(e);
    }
  }

  modelToQueryString(object: any) {
    const params = new URLSearchParams();
    for (const key in object) {
      params.set(key, object[key]);
    }
    return params.toString() + '&debug=true';
  }

  getPeoples(callback: HttpSuccesFailureResponse, showLoader: boolean) {
    this.myHttp.get<ApiResponseModel>(UrlConstants.people, showLoader).subscribe(
      data => {
        callback.onSuccess(UrlResponseCodes.peopleGet, data.data);
      },
      error => {
        this.myHttp.hideLoader();
        callback.onFailure(UrlResponseCodes.peopleGet, this.myHttp.handleApiErrorResponse(error));
      });
  }

  savePeople(user:any, callback: HttpSuccesFailureResponse, showLoader: boolean) {
    let body = user;
    this.myHttp.post<ApiResponseModel>(UrlConstants.people, showLoader, body).subscribe(
      data => {
        callback.onSuccess(UrlResponseCodes.peopleSave, data.data);
      },
      error => {
        this.myHttp.hideLoader();
        callback.onFailure(UrlResponseCodes.peopleSave, this.myHttp.handleApiErrorResponse(error));
      });
  }

  deletePeople(userid, callback: HttpSuccesFailureResponse, showLoader: boolean) {
    const body = {};
    this.myHttp.delete<ApiResponseModel>(UrlConstants.people + '/' + userid, showLoader, body).subscribe(
      data => {
        callback.onSuccess(UrlResponseCodes.peopleDelete, data.data);
      },
      error => {
        this.myHttp.hideLoader();
        callback.onFailure(UrlResponseCodes.peopleDelete, this.myHttp.handleApiErrorResponse(error));
      });
  }
}
