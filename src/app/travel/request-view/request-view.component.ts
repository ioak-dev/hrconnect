import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TravelService } from 'src/app/core/services/travel.service';
import { IProject } from '../models/project';
import { ITravel } from '../models/travel';
import { AuthService } from 'src/app/core/services/auth.service';
import { request } from 'http';

export class IRole {
  childUserId: string;
  id: string;
  parentUserId: string;
  type: string;
}

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {
  travelRequestId: string;
  travelRequest: any;

  isRequestApprover = false;
  isRequestAdmin = false;

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

  constructor(private router: Router,
              private _route: ActivatedRoute,
              private travelService: TravelService,
              public authService: AuthService) {
    this._route.params.subscribe( params =>
       this.travelRequestId = params['requestId']
    );
    authService.init();
  }

  ngOnInit() {
    sessionStorage.removeItem('request');
    this.travelService.getById(this.travelRequestId)
    .subscribe(
      (response) => {
        console.log(response);
        this.travelRequest = response;
        sessionStorage.setItem('request', JSON.stringify(response));
        this.loadDataFromStore();
        this.checkRequestApprover();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkRequestApprover() {
    console.log(this.authService.loggedInUser);
    this.travelService.getRoleDetail(this.authService.loggedInUser.id)
    .subscribe((result: IRole[]) => {
      result.filter(item => {
        console.log(item);
        if (
            (this.travelRequest.status === 'L1' && (item.childUserId === this.travelRequest.createdBy)) ||
            (this.travelRequest.status === 'L2' && (item.childUserId === this.travelRequest.createdBy)) ||
            (this.travelRequest.status === 'ADMIN' && (item.childUserId === this.travelRequest.createdBy))
          ) {
          this.isRequestApprover = true;
        }
      });
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

  edit() {
    sessionStorage.removeItem('request');
    this.travelService.getById(this.travelRequestId)
    .subscribe(
      (response) => {
        console.log(response);
        sessionStorage.setItem('request', JSON.stringify(response));
      },
      (error) => {
        console.log(error);
      }
    );
    setTimeout(() => {
      this.router.navigate(['travel/empDetail']);
    }, 1000);
  }

  approve() {
    this.travelService.approve(this.travelRequestId)
    .subscribe(
      (response) => {
        console.log(response);
        this.router.navigate([`travel`]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  reject() {
    this.travelService.reject(this.travelRequestId)
    .subscribe(
      (response) => {
        console.log(response);
        this.router.navigate([`travel`]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  withdraw() {
    alert('TBD');
  }
}
