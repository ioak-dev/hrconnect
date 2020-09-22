import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../common/Services/event.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  insuranceArray = [];
  insuranceNew = 'new';
  newrow: any;

  constructor(
    public router: Router,
    public eventService: EventService
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.insuranceArray = request.insuranceDetails ? request.insuranceDetails : [];
    }
  }

  ngOnInit() {
    this.eventService.clickedEvent.subscribe(data => {
      if (data === 'next') {
        this.navigateNext();
      } else if (data === 'previous') {
        this.navigatePrevious();
      }
    });
    this.newrow = {country: '', comment: ''};
    if (this.insuranceArray.length === 0) {
      this.insuranceArray.push(this.newrow);
    }
  }

  navigatePrevious() {
    if (this.insuranceArray[this.insuranceArray.length - 1]['country']) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['insuranceDetails'] = this.insuranceArray;
      sessionStorage.setItem('request', JSON.stringify(request));
    }
    this.router.navigate(['travel/application/visaDetails']);
  }

  navigateNext() {
    if (this.insuranceArray[this.insuranceArray.length - 1]['country']) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['insuranceDetails'] = this.insuranceArray;
      sessionStorage.setItem('request', JSON.stringify(request));
    }
    this.router.navigate(['travel/application/cabDetails']);
  }

  addRow(index) {
    if (this.insuranceArray[index]['country']) {
      this.newrow = {country: '', comment: ''};
      this.insuranceArray.push(this.newrow);
      return true;
    }
  }

  deleteRow(index) {
    if (this.insuranceArray.length > 1) {
      this.insuranceArray.splice(index, 1);
      return true;
    }
  }
}
