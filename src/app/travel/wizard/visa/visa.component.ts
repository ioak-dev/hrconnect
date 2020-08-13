import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.css']
})
export class VisaComponent implements OnInit {
  visaDetails = [];
  visaArray = [];
  visaNew: string;
  newrow: any;

  constructor(public router: Router) {
    if (sessionStorage.VisaDetails && sessionStorage.VisaDetails !== '[null]') {
      this.visaArray = JSON.parse(sessionStorage.getItem('VisaDetails'));
    }
  }

  ngOnInit() {
    console.log(this.visaArray);
    this.newrow = {country: '', visaType: '', entryType: '', comment: ''};
    if (this.visaArray.length === 0) {
      this.visaArray.push(this.newrow);
    }
  }

  navigatePrevious() {
    sessionStorage.setItem('VisaDetails', JSON.stringify(this.visaArray));
    this.router.navigate(['travel/empDetail']);
  }

  navigateNext() {
    sessionStorage.setItem('VisaDetails', JSON.stringify(this.visaArray));
    this.router.navigate(['travel/insuranceDetail']);
  }

  addRow(index) {
    this.newrow = {country: '', visaType: '', entryType: '', comment: ''};
    this.visaArray.push(this.newrow);
    console.log(this.visaArray);
    return true;
  }

  deleteRow(index) {
    this.visaArray.splice(index, 1);
    return true;
  }
}
