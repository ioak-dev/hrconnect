import {Component, OnInit} from '@angular/core';
import {ITravel} from '../../models/travel';
import {Router} from '@angular/router';
import {EventService} from '../../common/Services/event.service';

@Component({
  selector: 'app-wizard-three',
  templateUrl: './wizard-three.component.html',
  styleUrls: ['./wizard-three.component.css']
})
export class WizardThreeComponent implements OnInit {
  cabArray: Array<ITravel> = [];
  newrow: any = {};

  constructor(
    public router: Router,
    public eventService: EventService
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.cabArray = request.cabDetails ? request.cabDetails : [];
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
    if (this.cabArray.length === 0) {
      this.cabArray.push(this.newrow);
    }
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['cabDetails'] = this.cabArray;
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/application/flightDetail']);
  }

  navigatePrevious() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['cabDetails'] = this.cabArray;
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/application/travelType']);
  }

  addRow(index) {
    this.newrow = {source: '', destination: '', comment: ''};
    this.cabArray.push(this.newrow);
    console.log(this.cabArray);
    return true;
  }

  deleteRow(index) {
    this.cabArray.splice(index, 1);
    return true;
  }
}
