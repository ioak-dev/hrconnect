import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-wizard-two',
  templateUrl: './wizard-two.component.html',
  styleUrls: ['./wizard-two.component.css']
})
export class WizardTwoComponent implements OnInit {

  constructor(
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  navigateNext() {
    this.router.navigate(['travel/travelMode']);

  }
}
