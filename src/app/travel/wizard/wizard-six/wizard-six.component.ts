import { Component, OnInit } from '@angular/core';
import {ITravel} from '../../models/travel';
import {Router} from '@angular/router';
import {EventService} from '../../common/Services/event.service';

@Component({
  selector: 'app-wizard-six',
  templateUrl: './wizard-six.component.html',
  styleUrls: ['./wizard-six.component.css']
})
export class WizardSixComponent implements OnInit {
  busArray: Array<ITravel> = [];
  newrow: any;

  constructor(
    public router: Router,
    public eventService: EventService
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.busArray = request.busDetails ? request.busDetails : [];
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
    if (this.busArray.length === 0) {
      this.busArray.push(this.newrow);
    }
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['busDetails'] = this.busArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/application/hotelDetail']);
  }

  navigatePrevious() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['busDetails'] = this.busArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/application/trainDetail']);
  }

  addRow(index) {
    this.newrow = {source: '', destination: '', comment: ''};
    this.busArray.push(this.newrow);
    console.log(this.busArray);
    return true;
  }

  deleteRow(index) {
    this.busArray.splice(index, 1);
    return true;
  }
}
