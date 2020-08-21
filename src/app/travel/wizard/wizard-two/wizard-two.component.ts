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
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.travelType = request.travelType;
    }
  }

  ngOnInit() {
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['travelType'] = this.travelType;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    if (this.travelType === 'domestic') {
      this.router.navigate(['travel/cabDetail']);
    } else if (this.travelType === 'international') {
      this.router.navigate(['travel/visaDetail']);
    }
  }

  navigatePrevious() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['travelType'] = this.travelType;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/empDetail']);
  }
}
