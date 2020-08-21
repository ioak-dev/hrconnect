import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.css']
})
export class VisaComponent implements OnInit {
  visaArray = [];
  visaNew: string;
  newrow: any;

  constructor(public router: Router) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.visaArray = request.visaDetails ? request.visaDetails : [];
    }
  }

  ngOnInit() {
    this.newrow = {country: '', visaType: '', entryType: '', comment: ''};
    if (this.visaArray.length === 0) {
      this.visaArray.push(this.newrow);
    }
  }

  navigatePrevious() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['visaDetails'] = this.visaArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/travelType']);
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['visaDetails'] = this.visaArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
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
