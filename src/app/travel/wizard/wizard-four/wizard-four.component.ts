import {Component, OnInit} from '@angular/core';
import {ITravel} from '../../models/travel';
import {Router} from '@angular/router';
import {EventService} from '../../common/Services/event.service';

@Component({
  selector: 'app-wizard-four',
  templateUrl: './wizard-four.component.html',
  styleUrls: ['./wizard-four.component.css']
})
export class WizardFourComponent implements OnInit {
  flightArray: Array<ITravel> = [];
  newrow: any;

  constructor(
    public router: Router,
    public eventService: EventService
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.flightArray = request.flightDetails ? request.flightDetails : [];
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
    if (this.flightArray.length === 0) {
      this.flightArray.push(this.newrow);
    }
  }

  navigateNext() {
    if (this.flightArray[this.flightArray.length - 1].source &&
      this.flightArray[this.flightArray.length - 1].source) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['flightDetails'] = this.flightArray;
      sessionStorage.setItem('request', JSON.stringify(request));
    }
    this.router.navigate(['travel/application/trainDetails']);
  }

  navigatePrevious() {
    if (this.flightArray[this.flightArray.length - 1].source &&
      this.flightArray[this.flightArray.length - 1].source) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['flightDetails'] = this.flightArray;
      sessionStorage.setItem('request', JSON.stringify(request));
    }
    this.router.navigate(['travel/application/cabDetails']);
  }

  addRow(index) {
    if (this.flightArray[index].source && this.flightArray[index].destination) {
      this.newrow = {source: '', destination: '', comment: ''};
      this.flightArray.push(this.newrow);
      return true;
    }
  }

  deleteRow(index) {
    if (this.flightArray.length > 1) {
      this.flightArray.splice(index, 1);
      return true;
    }
  }
}
