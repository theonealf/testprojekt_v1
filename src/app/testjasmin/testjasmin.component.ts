import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testjasmin',
  templateUrl: './testjasmin.component.html',
  styleUrls: ['./testjasmin.component.scss']
})
export class TestjasminComponent implements OnInit {
  showhide:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  fnShowhide(){
    this.showhide=!this.showhide;

  }
}
