import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as data from './data.json';
import {TravelService} from 'src/app/core/services/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  data: any;
  email: string;
  requestList: any;

  constructor(private router: Router,
              private travelService: TravelService) {
    this.data = data;
    this.email = sessionStorage.getItem('userSigninName').toLowerCase();
    this.getPersonByEmail();
  }

  ngOnInit() {

  }

  getPersonByEmail() {
    this.travelService.getPersonDetail(this.email).subscribe(result => {
      console.log(result);
      sessionStorage.setItem('userData', JSON.stringify(result));
      this.travelService.getallRequest(result.id).subscribe(item => {
        this.requestList = item;
      });
    });
  }


  create() {
    sessionStorage.removeItem('request');
    this.router.navigate(['travel/empDetail']);
  }

  view(reqId) {
    this.router.navigate([`travel/view/${reqId}`]);
  }
}
