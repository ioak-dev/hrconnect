import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.initialize();
    this.authService.init();
  }

  refresh() {
    window.location.reload();
  }

  initialize() {
    this.loggedIn = false;
    if (sessionStorage.getItem('idToken') !== null) {
      this.loggedIn = true;
    }
  }

  logout(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.refresh();
    this.authService.clear();
    this.initialize();
  }
}
