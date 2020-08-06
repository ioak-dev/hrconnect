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
  flightDetails: Array<ITravel> = [];
  newrow: any;

  constructor(
    public router: Router
  ) {
    if (sessionStorage.FlightDetails && sessionStorage.FlightDetails !== '[null]') {
      this.flightArray = JSON.parse(sessionStorage.getItem('FlightDetails'));
      console.log(this.flightArray);
    }
  }

  ngOnInit() {
    this.newrow = {source: '', destination: '', comment: ''};
    if (this.flightArray.length === 0) {
      this.flightArray.push(this.newrow);
    }
  }

  navigateNext() {
    // this.cabDetails = this.cabArray.filter(cab => cab.source.length > 0);
    sessionStorage.setItem('FlightDetails', JSON.stringify(this.flightArray));
    this.router.navigate(['travel/trainDetail']);
  }

  navigatePrevious() {
    // this.cabDetails = this.cabArray.filter(cab => cab.source.length > 0);
    sessionStorage.setItem('FlightDetails', JSON.stringify(this.flightArray));
    this.router.navigate(['travel/cabDetail']);
  }

  addRow(index) {
    this.newrow = {Source: '', Destination: '', Comment: ''};
    this.flightArray.push(this.newrow);
    console.log(this.flightArray);
    return true;
  }

  deleteRow(index) {
    this.flightArray.splice(index, 1);
    return true;
  }
}
