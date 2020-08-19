import { Component, OnInit } from '@angular/core';
import { TravelService } from 'src/app/core/services/travel.service';
import { tap } from 'rxjs/operators';
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
  visaDetail = [];
  insuranceDetails = [];

  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.loadDaataFromStore();
  }

  loadDaataFromStore() {
    this.projectDetails = JSON.parse(sessionStorage.getItem('ProjectDetails'));
    this.travelType = sessionStorage.getItem('TravelType');
    this.cabDetails = JSON.parse(sessionStorage.getItem('CabDetails'));
    this.trainDetails = JSON.parse(sessionStorage.getItem('TrainDetails'));
    this.busDetails = JSON.parse(sessionStorage.getItem('BusDetails'));
    this.flightDetails = JSON.parse(sessionStorage.getItem('FlightDetails'));
    this.hotelDetails = JSON.parse(sessionStorage.getItem('HotelDetails'));
    this.visaDetail = JSON.parse(sessionStorage.getItem('VisaDetails'));
    this.insuranceDetails = JSON.parse(sessionStorage.getItem('InsuranceDetails'));
    console.log(this.projectDetails);
  }

  submit() {
    this.travelService.submit()
    .subscribe(
      (response) => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
