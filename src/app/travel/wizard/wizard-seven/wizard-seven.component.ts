import { Component, OnInit } from '@angular/core';
import {ITravel} from '../../models/travel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wizard-seven',
  templateUrl: './wizard-seven.component.html',
  styleUrls: ['./wizard-seven.component.css']
})
export class WizardSevenComponent implements OnInit {

  hotelArray: Array<ITravel> = [];
  hotelDetails: Array<ITravel> = [];
  newrow: any;

  constructor(
    public router: Router
  ) {
    if (sessionStorage.HotelDetails && sessionStorage.HotelDetails !== '[null]') {
      this.hotelArray = JSON.parse(sessionStorage.getItem('HotelDetails'));
    }
  }

  ngOnInit() {
    this.newrow = {source: '', destination: '', comment: ''};
    if (this.hotelArray.length === 0) {
      this.hotelArray.push(this.newrow);
    }
  }

  navigateNext() {
    // this.cabDetails = this.cabArray.filter(cab => cab.source.length > 0);
    sessionStorage.setItem('HotelDetails', JSON.stringify(this.hotelArray));
    this.router.navigate(['travel']);
  }

  navigatePrevious() {
    // this.cabDetails = this.cabArray.filter(cab => cab.source.length > 0);
    sessionStorage.setItem('HotelDetails', JSON.stringify(this.hotelArray));
    this.router.navigate(['travel/busDetail']);
  }

  addRow(index) {
    this.newrow = {Source: '', Destination: '', Comment: ''};
    this.hotelArray.push(this.newrow);
    console.log(this.hotelArray);
    return true;
  }

  deleteRow(index) {
    this.hotelArray.splice(index, 1);
    return true;
  }


}
