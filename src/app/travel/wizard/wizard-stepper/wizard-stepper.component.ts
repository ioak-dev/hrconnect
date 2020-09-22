import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

import * as wizards from './../../wizard.json';
import {EventService} from '../../common/Services/event.service';


@Component({
  selector: 'app-wizard-stepper',
  templateUrl: './wizard-stepper.component.html',
  styleUrls: ['./wizard-stepper.component.css']
})
export class WizardStepperComponent implements OnInit {
  wizards: any;
  activeUrl: string;
  previousUrl: string;
  visitedWizards = [];
  isInternational = false;

  constructor(public router: Router,
              public eventService: EventService) {
    this.wizards = wizards;
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const sessionData = JSON.parse(sessionStorage.getItem('request'));
      const currentURL = event.url.split('/');
      this.activeUrl = currentURL[currentURL.length - 1];
      this.visitedWizards = Object.keys(sessionData);
    });
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      request.travelType === 'International' ? this.isInternational = true : this.isInternational = false;
    }
  }

  ngOnInit() {
    this.eventService.clickedEvent.subscribe(data => {
      if (data === 'domestic') {
        this.isInternational = false;
      } else if (data === 'international') {
        this.isInternational = true;
      }
    });
  }

  navigate(route) {
    this.router.navigate([`travel/application/${route}`]);
  }
}
