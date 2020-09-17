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
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['insuranceDetails'] = this.insuranceArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/application/visaDetail']);
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['insuranceDetails'] = this.insuranceArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/application/cabDetail']);
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
