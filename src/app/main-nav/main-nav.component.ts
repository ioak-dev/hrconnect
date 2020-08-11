import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  username: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('userDisplayName');
  }

}
