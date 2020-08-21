import { Component, OnInit } from '@angular/core';
import { TravelService } from 'src/app/core/services/travel.service';
import {ITravel} from '../../models/travel';
import {IProject} from '../../models/project';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  projectDetails: IProject[] = [];
  travelType: string;
  cabDetails: ITravel[];
  trainDetails: ITravel[];
  busDetails: ITravel[];
  flightDetails: ITravel[];
  hotelDetails = [];
  visaDetails = [];
  insuranceDetails = [];

  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.loadDataFromStore();
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
    }
  }

  submit() {
    this.travelService.submit()
    .subscribe(
      (response) => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
