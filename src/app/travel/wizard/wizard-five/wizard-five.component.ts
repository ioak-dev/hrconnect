import { Component, OnInit } from '@angular/core';
import {ITravel} from '../../models/travel';
import {Router} from '@angular/router';
import {EventService} from '../../common/Services/event.service';

@Component({
  selector: 'app-wizard-five',
  templateUrl: './wizard-five.component.html',
  styleUrls: ['./wizard-five.component.css']
})
export class WizardFiveComponent implements OnInit {
  trainArray: Array<ITravel> = [];
  newrow: any;

  constructor(
    public router: Router,
    public eventService: EventService

  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.trainArray = request.trainDetails ? request.trainDetails : [];
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
    this.newrow = {source: '', destination: '', comment: ''};
    if (this.trainArray.length === 0) {
      this.trainArray.push(this.newrow);
    }
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['trainDetails'] = this.trainArray;
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/application/busDetail']);
  }

  navigatePrevious() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['trainDetails'] = this.trainArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/application/flightDetail']);
  }

  addRow(index) {
    this.newrow = {source: '', destination: '', comment: ''};
    this.trainArray.push(this.newrow);
    console.log(this.trainArray);
    return true;
  }

  deleteRow(index) {
    this.trainArray.splice(index, 1);
    return true;
  }
}
