import { AppSettings } from './../appsettings/appsettings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hem',
  templateUrl: './hem.component.html',
  styleUrls: ['./hem.component.scss']
})
export class HemComponent implements OnInit {

  constructor(private settings: AppSettings) { }

  ngOnInit(): void {
    setInterval(() => {
      this.settings.loader = false;

    }, 1);
  }

}
