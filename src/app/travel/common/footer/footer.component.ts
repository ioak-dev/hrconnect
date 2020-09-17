import {Component, OnInit} from '@angular/core';
import {EventService} from '../Services/event.service';
import {filter} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  activeUrl: string
  constructor(
    public eventService: EventService,
    private router: Router,
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentURL = event.url.split('/');
      this.activeUrl = currentURL[currentURL.length - 1];
    });
  }

  ngOnInit() {
  }

  nextClicked() {
    this.eventService.buttonClicked('next');
  }
  previousClicked() {
    this.eventService.buttonClicked('previous');
  }
  submitClicked() {
    this.eventService.buttonClicked('submit');
  }
  saveClicked() {
    this.eventService.buttonClicked('save');
  }
  cancelClicked() {
    this.eventService.buttonClicked('cancel');
  }

}
