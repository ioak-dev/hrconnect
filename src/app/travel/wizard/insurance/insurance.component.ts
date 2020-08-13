import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  insuranceDetails = [];
  insuranceArray = [];
  insuranceNew: string;
  newrow: any;

  constructor(public router: Router) {
    if (sessionStorage.InsuranceDetails && sessionStorage.InsuranceDetails !== '[null]') {
      this.insuranceArray = JSON.parse(sessionStorage.getItem('InsuranceDetails'));
    }
  }

  ngOnInit() {
    console.log(this.insuranceArray);
    this.newrow = {country: '', comment: ''};
    if (this.insuranceArray.length === 0) {
      this.insuranceArray.push(this.newrow);
    }
  }

  navigatePrevious() {
    sessionStorage.setItem('InsuranceDetails', JSON.stringify(this.insuranceArray));
    this.router.navigate(['travel/visaDetail']);
  }

  navigateNext() {
    sessionStorage.setItem('InsuranceDetails', JSON.stringify(this.insuranceArray));
    this.router.navigate(['travel/cabDetail']);
  }

  addRow(index) {
    this.newrow = {country: '', comment: ''};
    this.insuranceArray.push(this.newrow);
    console.log(this.insuranceArray);
    return true;
  }

  deleteRow(index) {
    this.insuranceArray.splice(index, 1);
    return true;
  }

}
