import { Component, OnInit } from '@angular/core';
import {ITravel} from '../../models/travel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wizard-six',
  templateUrl: './wizard-six.component.html',
  styleUrls: ['./wizard-six.component.css']
})
export class WizardSixComponent implements OnInit {

  busArray: Array<ITravel> = [];
  busDetails: Array<ITravel> = [];
  newrow: any;

  constructor(
    public router: Router
  ) {
    if (sessionStorage.BusDetails && sessionStorage.BusDetails !== '[null]') {
      this.busArray = JSON.parse(sessionStorage.getItem('BusDetails'));
    }
  }

  ngOnInit() {
    this.newrow = {source: '', destination: '', comment: ''};
    if (this.busArray.length === 0) {
      this.busArray.push(this.newrow);
    }
  }

  navigateNext() {
    // this.cabDetails = this.cabArray.filter(cab => cab.source.length > 0);
    sessionStorage.setItem('BusDetails', JSON.stringify(this.busArray));
    this.router.navigate(['travel/hotelDetail']);
  }

  navigatePrevious() {
    // this.cabDetails = this.cabArray.filter(cab => cab.source.length > 0);
    sessionStorage.setItem('BusDetails', JSON.stringify(this.busArray));
    this.router.navigate(['travel/trainDetail']);
  }

  addRow(index) {
    this.newrow = {Source: '', Destination: '', Comment: ''};
    this.busArray.push(this.newrow);
    console.log(this.busArray);
    return true;
  }

  deleteRow(index) {
    this.busArray.splice(index, 1);
    return true;
  }


}
