import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../common/Services/event.service';

@Component({
  selector: 'app-wizard-two',
  templateUrl: './wizard-two.component.html',
  styleUrls: ['./wizard-two.component.css']
})
export class WizardTwoComponent implements OnInit {
  travelType: string;

  constructor(
    public router: Router,
    public eventService: EventService
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.travelType = request.travelType;
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
  }

  radioSelected(value) {
    this.eventService.buttonClicked(value);
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['travelType'] = this.travelType;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    if (this.travelType === 'Domestic') {
      this.router.navigate(['travel/application/cabDetails']);
    } else if (this.travelType === 'International') {
      this.router.navigate(['travel/application/visaDetails']);
    }
  }

  navigatePrevious() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['travelType'] = this.travelType;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/application/projectDetails']);
  }
}
