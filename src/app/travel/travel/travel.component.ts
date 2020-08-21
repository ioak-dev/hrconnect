import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as data from './data.json';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  data: any;

  constructor(private router: Router) {
    this.data = data;
  }

  ngOnInit() {
  }

  create() {
    sessionStorage.removeItem('request');
    this.router.navigate(['travel/empDetail']);
  }

  edit() {
    sessionStorage.removeItem('request');
    sessionStorage.setItem('request', JSON.stringify(this.data.default));
    this.router.navigate(['travel/empDetail']);
  }

  view() {
    sessionStorage.removeItem('request');
    sessionStorage.setItem('request', JSON.stringify(this.data.default));
    this.router.navigate(['travel/submit']);
  }
}
