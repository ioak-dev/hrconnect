import {Injectable} from '@angular/core';
import { TravelService } from './travel.service';
import { IUserType } from '../model/userType';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private travelService: TravelService) { }

  loggedIn = false;
  loggedInUser: IUserType;

  init() {
    const emailId = sessionStorage.getItem('userSigninName');
    if (emailId) {
      this.travelService.getPersonDetail(emailId).subscribe(result => {
        this.loggedInUser = result;
        this.getloggedInUserRoles();
      });
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  getloggedInUserRoles() {
    this.travelService.getRoleDetail(this.loggedInUser.id).subscribe(result => {
      this.loggedInUser.roles = result;
      sessionStorage.setItem('roleData', result);
    });
  }

  clear() {
    this.loggedInUser = null;
    this.loggedIn = false;
  }
}
