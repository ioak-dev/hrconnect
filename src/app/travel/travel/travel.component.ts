import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.router.navigate(['travel/empDetail']);
  }

  edit() {
    this.router.navigate(['travel/empDetail']);
  }

  view() {
    this.router.navigate(['travel/submit']);
  }
}
