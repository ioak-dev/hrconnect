import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wizard-two',
  templateUrl: './wizard-two.component.html',
  styleUrls: ['./wizard-two.component.css']
})
export class WizardTwoComponent implements OnInit {
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
    if (this.travelType === 'domestic') {
      this.router.navigate(['travel/cabDetail']);
    } else if (this.travelType === 'international') {
      this.router.navigate(['travel/visaDetail']);
    }
  }

  navigatePrevious() {
    this.router.navigate(['travel']);
  }
}
