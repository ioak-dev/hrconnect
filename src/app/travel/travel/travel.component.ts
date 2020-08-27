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
      sessionStorage.setItem('PersonDetails', JSON.stringify(result));
      this.travelService.getallRequest(result.id).subscribe(item => {
        this.requestList = item;
        console.log(item);
      });
    });
  }


  create() {
    sessionStorage.removeItem('request');
    this.router.navigate(['travel/empDetail']);
  }

  edit(reqId) {
    sessionStorage.removeItem('request');
    this.travelService.getById(reqId)
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

  view(reqId) {
    sessionStorage.removeItem('request');
    this.travelService.getById(reqId)
      .subscribe(
        (response) => {
          console.log(response);
          sessionStorage.setItem('request', JSON.stringify(response));
        },
        (error) => {
          console.log(error);
        }
      );
    this.router.navigate([`travel/view/${reqId}`]);
  }
}
