import {Component, OnInit} from '@angular/core';
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
    if (this.trainArray[this.trainArray.length - 1].source &&
      this.trainArray[this.trainArray.length - 1].source) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['trainDetails'] = this.trainArray;
      sessionStorage.setItem('request', JSON.stringify(request));
    }
    this.router.navigate(['travel/application/busDetails']);
  }

  navigatePrevious() {
    if (this.trainArray[this.trainArray.length - 1].source &&
      this.trainArray[this.trainArray.length - 1].source) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['trainDetails'] = this.trainArray;
      sessionStorage.setItem('request', JSON.stringify(request));
    }
    this.router.navigate(['travel/application/flightDetails']);
  }

  addRow(index) {
    if (this.trainArray[index].source && this.trainArray[index].destination) {
      this.newrow = {source: '', destination: '', comment: ''};
      this.trainArray.push(this.newrow);
      return true;
    }
  }

  deleteRow(index) {
    if (this.trainArray.length > 1) {
      this.trainArray.splice(index, 1);
      return true;
    }
  }
}
