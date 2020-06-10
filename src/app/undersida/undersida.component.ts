import { AppSettings } from './../appsettings/appsettings';
import { WpApiService } from './../services/wp-Api/wp-api.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-undersida',
  templateUrl: './undersida.component.html',
  styleUrls: ['./undersida.component.scss']
})
export class UndersidaComponent implements OnInit {

  pagedata: any = [];

  constructor(private route: ActivatedRoute, private wpApi: WpApiService, public settings: AppSettings, ) {
      this.settings.loader = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe( prams => {
        const pageslug = prams.get('slug');
        this.handlelocalstorage(pageslug);
    });

  }
  ngOnDestroy() {
    this.settings.loader = true;
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
  handlelocalstorage(pageslug) {
    if (!localStorage.getItem(pageslug)) {
      this.wpApi.getPageSlug(pageslug).subscribe(Response => {
        this.pagedata = Response;
        localStorage.setItem(pageslug, JSON.stringify(Response));
        this.settings.loader = false;
        return true;
      });
    } else {
      const testobj = JSON.parse(localStorage.getItem(pageslug));
      this.pagedata = testobj;
      setInterval(() => {
        this.settings.loader = false;

      }, 500);
    }
  }

}
