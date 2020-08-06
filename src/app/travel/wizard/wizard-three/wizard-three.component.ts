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
  cabDetails: Array<ITravel> = [];
  newrow: any = {};

  constructor(
    public router: Router
  ) {
    if (sessionStorage.CabDetails) {
      this.cabArray = JSON.parse(sessionStorage.getItem('CabDetails'));
    }
  }

  ngOnInit() {
    this.newrow = {source: '', destination: '', comment: ''};
    if (this.cabArray.length === 0) {
      this.cabArray.push(this.newrow);
    }
  }

  navigateNext() {
    // this.cabDetails = this.cabArray.filter(cab => cab.source.length > 0);
    sessionStorage.setItem('CabDetails', JSON.stringify(this.cabArray));
    this.router.navigate(['travel/flightDetail']);
  }

  navigatePrevious() {
    // this.cabDetails = this.cabArray.filter(cab => cab.source.length > 0);
    sessionStorage.setItem('CabDetails', JSON.stringify(this.cabArray));
    this.router.navigate(['travel/empDetail']);
  }

  addRow(index) {
    this.newrow = {Source: '', Destination: '', Comment: ''};
    this.cabArray.push(this.newrow);
    console.log(this.cabArray);
    return true;
  }

  deleteRow(index) {
    this.cabArray.splice(index, 1);
    return true;
  }

}
