import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../common/Services/event.service';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.css']
})
export class VisaComponent implements OnInit {
  visaArray = [];
  visaNew = 'new';
  newrow: any;

  constructor(
    public router: Router,
    public eventService: EventService
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.visaArray = request.visaDetails ? request.visaDetails : [];
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
    this.newrow = {country: '', visaType: '', entryType: '', comment: ''};
    if (this.visaArray.length === 0) {
      this.visaArray.push(this.newrow);
    }
  }

  navigatePrevious() {
    if (this.visaArray[this.visaArray.length - 1]['country'] &&
      this.visaArray[this.visaArray.length - 1]['visaType']) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['visaDetails'] = this.visaArray;
      sessionStorage.setItem('request', JSON.stringify(request));
    }
    this.router.navigate(['travel/application/travelType']);
  }

  navigateNext() {
    if (this.visaArray[this.visaArray.length - 1]['country'] &&
      this.visaArray[this.visaArray.length - 1]['visaType']) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['visaDetails'] = this.visaArray;
      sessionStorage.setItem('request', JSON.stringify(request));
    }
    this.router.navigate(['travel/application/insuranceDetails']);
  }

  addRow(index) {
    if (this.visaArray[index]['country'] && this.visaArray[index]['visaType']) {
      this.newrow = {country: '', visaType: '', entryType: '', comment: ''};
      this.visaArray.push(this.newrow);
    }
    return true;
  }

  deleteRow(index) {
    if (this.visaArray.length > 1) {
      this.visaArray.splice(index, 1);
      return true;
    }
  }
}
