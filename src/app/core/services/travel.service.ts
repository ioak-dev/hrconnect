import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { EnvService } from 'src/app/env.service';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(
    private http: HttpClient,
    private env: EnvService) {
  }

  submit(request): Observable<any> {
    return this.http.put(this.env.backendUrl + `/wizard/create`, request, httpOptions)
    .pipe(map(
      (response: HttpResponse<any>) => response
    ));
  }
}
