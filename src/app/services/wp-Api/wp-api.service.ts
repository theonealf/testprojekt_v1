import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from './../api-service.service';
import { Injectable } from '@angular/core';
import {AppSettings} from './../../appsettings/appsettings';


@Injectable({
  providedIn: 'root'
})
export class WpApiService extends ApiServiceService {

  // private server:string ="http://localhost:81/Angular_wp/wpAdmin/wp-json/wp/v2/";
  // private server:string ="http://dev.frontdata.se/lasfirman/wpAdmin/wp-json/wp/v2/";

  constructor(Http: HttpClient, private settings: AppSettings) {
    super('', Http);
  }

  getMeny(meny: any) {
    const url: string = this.settings.serverurl + 'meny?filter[orderby]=date&order=desc';
    return this.getPosts(url);
  }

  getPageSlug(slug: any) {
    const url: string = this.settings.serverurl + 'pages?slug=' + slug;
    return this.getPosts(url);
  }

}
