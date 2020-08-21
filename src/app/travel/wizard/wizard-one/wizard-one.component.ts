import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IProject} from '../../models/project';

@Component({
  selector: 'app-wizard-one',
  templateUrl: './wizard-one.component.html',
  styleUrls: ['./wizard-one.component.css']
})
export class WizardOneComponent implements OnInit {
  projectArray: Array<IProject> = [];
  newrow: any = {};

  constructor(
    public router: Router
  ) {
    if (sessionStorage.request) {
      const request = JSON.parse(sessionStorage.getItem('request'));
      this.projectArray = request.projectDetails ? request.projectDetails : [];
    } else {
      sessionStorage.setItem('request', JSON.stringify({}));
    }
  }

  ngOnInit() {
    this.newrow = {projectName: '', empId: ''};
    if (this.projectArray.length === 0) {
      this.projectArray.push(this.newrow);
    }
  }

  navigateNext() {
    const request = JSON.parse(sessionStorage.getItem('request'));
    request['projectDetails'] = this.projectArray;
    console.log(request);
    sessionStorage.setItem('request', JSON.stringify(request));
    this.router.navigate(['travel/travelType']);
  }

  addRow(index) {
    this.newrow = {projectName: '', empId: ''};
    this.projectArray.push(this.newrow);
    console.log(this.projectArray);
    return true;
  }

  deleteRow(index) {
    this.projectArray.splice(index, 1);
    return true;
  }
}
