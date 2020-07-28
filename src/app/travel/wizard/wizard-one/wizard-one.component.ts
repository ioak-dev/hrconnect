import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wizard-one',
  templateUrl: './wizard-one.component.html',
  styleUrls: ['./wizard-one.component.css']
})
export class WizardOneComponent implements OnInit {
  travelType: string;

  constructor(
    public router: Router
  ) {
    if (sessionStorage.TravelType) {
      this.travelType = sessionStorage.getItem('TravelType');
    }
  }

  ngOnInit() {
  }

  navigateNext() {
    sessionStorage.setItem('TravelType', this.travelType);
    this.router.navigate(['travel/empDetail']);

  }

}
