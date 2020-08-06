import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IProject} from '../../models/project';


@Component({
  selector: 'app-wizard-two',
  templateUrl: './wizard-two.component.html',
  styleUrls: ['./wizard-two.component.css']
})
export class WizardTwoComponent implements OnInit {
  projectArray: Array<IProject> = [];
  ProjectDetails: Array<IProject> = [];
  newrow: any = {};

  constructor(
    public router: Router
  ) {
    if (sessionStorage.ProjectDetails) {
      this.projectArray = JSON.parse(sessionStorage.getItem('ProjectDetails'));
    }
  }

  ngOnInit() {
    this.newrow = {ProjectName: '', EmpId: ''};
    if (this.projectArray.length === 0) {
      this.projectArray.push(this.newrow);
    }
  }

  navigateNext() {
    this.ProjectDetails = this.projectArray.filter(project => project.EmpId.length > 0);
    sessionStorage.setItem('ProjectDetails', JSON.stringify(this.ProjectDetails));
    this.router.navigate(['travel/cabDetail']);
  }

  navigatePrevious() {
    this.ProjectDetails = this.projectArray.filter(project => project.EmpId.length > 0);
    sessionStorage.setItem('ProjectDetails', JSON.stringify(this.ProjectDetails));
    this.router.navigate(['travel']);
  }

  addRow(index) {
    this.newrow = {ProjectName: '', EmpId: ''};
    this.projectArray.push(this.newrow);
    console.log(this.projectArray);
    return true;
  }

  deleteRow(index) {
    this.projectArray.splice(index, 1);
    return true;
  }
}
