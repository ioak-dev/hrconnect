import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }

  loggedIn = false;
  loggedInUser: any;

  init() {
    console.log(sessionStorage.getItem('userSigninName'));
    if (sessionStorage.getItem('userSigninName')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  clear() {
    this.loggedInUser = null;
    this.loggedIn = false;
  }
}
