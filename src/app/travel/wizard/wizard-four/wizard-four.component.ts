import {Component, OnInit} from '@angular/core';
import {ITravel} from '../../models/travel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wizard-four',
  templateUrl: './wizard-four.component.html',
  styleUrls: ['./wizard-four.component.css']
})
export class WizardFourComponent implements OnInit {
  flightArray: Array<ITravel> = [];
  newrow: any;

  constructor(
    public router: Router
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.flightArray = request.flightDetails ? request.flightDetails : [];
    }
  }

  ngOnInit() {
    this.newrow = {source: '', destination: '', comment: ''};
    if (this.flightArray.length === 0) {
      this.flightArray.push(this.newrow);
    }
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['flightDetails'] = this.flightArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/trainDetail']);
  }

  navigatePrevious() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['flightDetails'] = this.flightArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/cabDetail']);
  }

  addRow(index) {
    this.newrow = {source: '', destination: '', comment: ''};
    this.flightArray.push(this.newrow);
    console.log(this.flightArray);
    return true;
  }

  deleteRow(index) {
    this.flightArray.splice(index, 1);
    return true;
  }
}
