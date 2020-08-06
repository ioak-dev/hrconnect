import { Component, OnInit } from '@angular/core';
import {ITravel} from '../../models/travel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wizard-five',
  templateUrl: './wizard-five.component.html',
  styleUrls: ['./wizard-five.component.css']
})
export class WizardFiveComponent implements OnInit {

  trainArray: Array<ITravel> = [];
  trainDetails: Array<ITravel> = [];
  newrow: any;

  constructor(
    public router: Router
  ) {
    if (sessionStorage.TrainDetails && sessionStorage.TrainDetails !== '[null]') {
      this.trainArray = JSON.parse(sessionStorage.getItem('TrainDetails'));
      console.log(this.trainArray);
    }
  }

  ngOnInit() {
    this.newrow = {source: '', destination: '', comment: ''};
    if (this.trainArray.length === 0) {
      this.trainArray.push(this.newrow);
    }
  }

  navigateNext() {
    // this.cabDetails = this.cabArray.filter(cab => cab.source.length > 0);
    sessionStorage.setItem('TrainDetails', JSON.stringify(this.trainArray));
    this.router.navigate(['travel/busDetail']);
  }

  navigatePrevious() {
    // this.cabDetails = this.cabArray.filter(cab => cab.source.length > 0);
    sessionStorage.setItem('TrainDetails', JSON.stringify(this.trainArray));
    this.router.navigate(['travel/flightDetail']);
  }

  addRow(index) {
    this.newrow = {Source: '', Destination: '', Comment: ''};
    this.trainArray.push(this.newrow);
    console.log(this.trainArray);
    return true;
  }

  deleteRow(index) {
    this.trainArray.splice(index, 1);
    return true;
  }

}
