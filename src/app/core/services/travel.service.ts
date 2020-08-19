import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(
    private http: HttpClient,
    private env: EnvService) {
  }

  submit(): Observable<any> {
    return this.http.put(this.env.backendUrl + `/wizard/submit`, { observe: 'response' })
    .pipe(map(
      (response: HttpResponse<any>) => response
    ));
  }
}
