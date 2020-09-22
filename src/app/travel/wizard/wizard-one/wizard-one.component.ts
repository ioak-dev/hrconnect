import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IProject} from '../../models/project';
import {EventService} from '../../common/Services/event.service';

@Component({
  selector: 'app-wizard-one',
  templateUrl: './wizard-one.component.html',
  styleUrls: ['./wizard-one.component.css']
})
export class WizardOneComponent implements OnInit {
  projectDetails = {
    projectName: '',
    email: ''
  };

  constructor(
    public router: Router,
    public eventService: EventService
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.projectDetails = request.projectDetails ? request.projectDetails : {};
    } else {
      sessionStorage.setItem('request', JSON.stringify({}));
    }
    if (sessionStorage.userData) {
      const user = JSON.parse(sessionStorage.getItem('userData'));
      this.projectDetails.email = user.email ? user.email : '';
    }
  }

  ngOnInit() {
    this.eventService.clickedEvent.subscribe(data => {
      if (data === 'next') {
        this.navigateNext();
      }
    });
  }

  navigateNext() {
    if (this.projectDetails.projectName && this.projectDetails.email) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request['projectDetails'] = this.projectDetails;
      sessionStorage.setItem('request', JSON.stringify(request));
      this.router.navigate(['travel/application/travelType']);
    }
  }


}
