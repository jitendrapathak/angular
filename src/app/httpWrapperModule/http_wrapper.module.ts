import {HttpWrapper} from './http-wrapper';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpCommonUtilsService} from './http_common_util.service';
import {HttpUserUtilsService} from './http_user_util.service';
import {HttpMidlUtilService} from './http_midl_util.service';
import { HttpMediaService } from './http_media.service';
import { HttpPeopleService } from './http_people.service';

@NgModule({
  imports: [HttpModule],
  declarations: [],
  providers: [HttpWrapper, HttpCommonUtilsService, HttpPeopleService, HttpUserUtilsService, HttpMediaService , HttpMidlUtilService],
})
export class HttpWrapperModule {
}
