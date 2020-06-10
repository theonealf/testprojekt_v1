import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WpServiceService extends ApiServiceService  {
  private server = 'https://www2.barnensbibliotek.se/Api_v3.1/QuestAdmin/typ/';
  private devkey = '/devkey/alf?type=json';

  constructor(Http: HttpClient) {
    super('', Http);
  }
  getList(urls?: any) {
    const url: string = this.server + 'getQ/val/50' + this.devkey;
    return this.getPosts(url);
  }

}
