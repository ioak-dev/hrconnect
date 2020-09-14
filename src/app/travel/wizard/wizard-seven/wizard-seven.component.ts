import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wizard-seven',
  templateUrl: './wizard-seven.component.html',
  styleUrls: ['./wizard-seven.component.css']
})
export class WizardSevenComponent implements OnInit {
  hotelArray = [];
  newrow: any;

  constructor(
    public router: Router
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.hotelArray = request.hotelDetails ? request.hotelDetails : [];
    }
  }

  ngOnInit() {
    this.newrow = {location: '', checkinDate: '', checkoutDate: '', comment: ''};
    if (this.hotelArray.length === 0) {
      this.hotelArray.push(this.newrow);
    }
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['hotelDetails'] = this.hotelArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/submit']);
  }

  navigatePrevious() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['hotelDetails'] = this.hotelArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/busDetail']);
  }

  addRow(index) {
    this.newrow = {location: '', checkinDate: '', checkoutDate: '', comment: ''};
    this.hotelArray.push(this.newrow);
    console.log(this.hotelArray);
    return true;
  }

  deleteRow(index) {
    this.hotelArray.splice(index, 1);
    return true;
  }
}