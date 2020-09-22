import {Component, OnInit} from '@angular/core';
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
    if (this.busArray[this.busArray.length - 1].source &&
      this.busArray[this.busArray.length - 1].source) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['busDetails'] = this.busArray;
      sessionStorage.setItem('request', JSON.stringify(request));
    }
    this.router.navigate(['travel/application/hotelDetails']);
  }

  navigatePrevious() {
    if (this.busArray[this.busArray.length - 1].source &&
      this.busArray[this.busArray.length - 1].source) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['busDetails'] = this.busArray;
      sessionStorage.setItem('request', JSON.stringify(request));
    }
    this.router.navigate(['travel/application/trainDetails']);
  }

  addRow(index) {
    if (this.busArray[index].source && this.busArray[index].destination) {
      this.newrow = {source: '', destination: '', comment: ''};
      this.busArray.push(this.newrow);
      return true;
    }
  }

  deleteRow(index) {
    if (this.busArray.length > 1) {
      this.busArray.splice(index, 1);
      return true;
    }
  }
}
