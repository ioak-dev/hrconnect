import {Component, OnInit} from '@angular/core';
import {ITravel} from '../../models/travel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wizard-three',
  templateUrl: './wizard-three.component.html',
  styleUrls: ['./wizard-three.component.css']
})
export class WizardThreeComponent implements OnInit {
  cabArray: Array<ITravel> = [];
  newrow: any = {};

  constructor(
    public router: Router
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.cabArray = request.cabDetails ? request.cabDetails : [];
    }
  }

  ngOnInit() {
    this.newrow = {source: '', destination: '', comment: ''};
    if (this.cabArray.length === 0) {
      this.cabArray.push(this.newrow);
    }
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['cabDetails'] = this.cabArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/flightDetail']);
  }

  navigatePrevious() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['cabDetails'] = this.cabArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/travelType']);
  }

  addRow(index) {
    this.newrow = {source: '', destination: '', comment: ''};
    this.cabArray.push(this.newrow);
    console.log(this.cabArray);
    return true;
  }

  deleteRow(index) {
    this.cabArray.splice(index, 1);
    return true;
  }
}