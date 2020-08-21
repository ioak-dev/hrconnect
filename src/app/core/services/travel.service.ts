import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
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

  getById(requestId): Observable<any> {
    return this.http.get(this.env.backendUrl + `/wizard/${requestId}`)
    .pipe(map(
      (response: HttpResponse<any>) => response
    ));
  }
}
