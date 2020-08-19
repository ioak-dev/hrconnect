import {Component, OnInit} from '@angular/core';
import {IProject} from '../../models/project';
import {ITravel} from '../../models/travel';

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

  constructor() {
    this.projectDetails = JSON.parse(sessionStorage.getItem('ProjectDetails'));

  }

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

}
