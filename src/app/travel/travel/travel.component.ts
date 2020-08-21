import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as data from './data.json';
import { TravelService } from 'src/app/core/services/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  data: any;
  requestId = '5f3fbca21aed1d53b0c8690c';

  constructor(private router: Router,
    private travelService: TravelService) {
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
    this.travelService.getById(this.requestId)
    .subscribe(
      (response) => {
        console.log(response);
        sessionStorage.setItem('request', JSON.stringify(response));
      },
      (error) => {
        console.log(error);
      }
    );
    setTimeout(() => {
      this.router.navigate(['travel/empDetail']);
    }, 1000);
  }

  view() {
    sessionStorage.removeItem('request');
    this.travelService.getById(this.requestId)
    .subscribe(
      (response) => {
        console.log(response);
        sessionStorage.setItem('request', JSON.stringify(response));
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate([`travel/view/${this.requestId}`]);
  }
}
