import {Component, OnInit, Input} from '@angular/core';
import {TravelService} from 'src/app/core/services/travel.service';
import {ITravel} from '../../models/travel';
import {IProject} from '../../models/project';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/core/services/auth.service';
import {EventService} from '../../common/Services/event.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  @Input() view: boolean;
  projectDetails: IProject[] = [];
  travelType: string;
  cabDetails: ITravel[] = [];
  trainDetails: ITravel[] = [];
  busDetails: ITravel[] = [];
  flightDetails: ITravel[] = [];
  hotelDetails = [];
  visaDetails = [];
  insuranceDetails = [];
  pmEmail: string;
  userDetail: any;

  constructor(private travelService: TravelService,
              private router: Router,
              public eventService: EventService,
              public authService: AuthService) {
    authService.init();
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadDataFromStore();
    }, 1000);
    this.eventService.clickedEvent.subscribe(data => {
      if (data === 'submit') {
        this.create();
      } else if (data === 'save') {
        this.create();
      } else if (data === 'cancel') {
        this.close();
      }
    });
  }

  loadDataFromStore() {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.projectDetails = request.projectDetails;
      this.travelType = request.travelType;
      this.cabDetails = request.cabDetails;
      this.trainDetails = request.trainDetails;
      this.busDetails = request.busDetails;
      this.flightDetails = request.flightDetails;
      this.hotelDetails = request.hotelDetails;
      this.visaDetails = request.visaDetails;
      this.insuranceDetails = request.insuranceDetails;
      this.pmEmail = request.pmEmail;
    }
    if (sessionStorage.userData) {
      this.userDetail = JSON.parse(sessionStorage.getItem('userData'));
    }
  }

  create() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['pmEmail'] = this.pmEmail;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    const payload = {
      id: request.id,
      projectDetails: request.projectDetails,
      travelType: request.travelType,
      cabDetails: request.cabDetails,
      trainDetails: request.trainDetails,
      busDetails: request.busDetails,
      flightDetails: request.flightDetails,
      hotelDetails: request.hotelDetails,
      visaDetails: request.visaDetails,
      insuranceDetails: request.insuranceDetails,
      pmEmail: this.pmEmail,
      createdBy: this.userDetail.id
    };
    this.travelService.create(payload, this.authService.loggedInUser.id)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['travel']);
        },
        error => {
          console.log(error);
        }
      );
  }

  close() {
    this.router.navigate(['/travel']);
  }
}
