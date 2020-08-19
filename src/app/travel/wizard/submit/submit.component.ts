import { Component, OnInit } from '@angular/core';
import { TravelService } from 'src/app/core/services/travel.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private travelService: TravelService) { }

  ngOnInit() {
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
