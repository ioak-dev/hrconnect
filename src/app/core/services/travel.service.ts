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
    return this.http.put(this.env.backendUrl + `/wizard/submit`, request, httpOptions)
    .pipe(map(
      (response: HttpResponse<any>) => response
    ));
  }

  create(request, userId): Observable<any> {
    return this.http.put(this.env.backendUrl + `/wizard/create?userId=${userId}`, request, httpOptions)
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

  getallRequest(userId): Observable<any> {
    return this.http.get(this.env.backendUrl + `/wizard/user/${userId}`)
    .pipe(map(
      (response: HttpResponse<any>) => response
    ));
  }

  getPersonDetail(email): Observable<any> {
    return this.http.get(this.env.backendUrl + `/person/email/${email }`)
    .pipe(map(
      (response: HttpResponse<any>) => response
    ));
  }

  getRoleDetail(userId): Observable<any> {
    return this.http.get(this.env.backendUrl + `/role?userId=${userId}`)
    .pipe(map(
      (response: HttpResponse<any>) => response
    ));
  }

  approve(requestId): Observable<any> {
    return this.http.post(this.env.backendUrl + `/wizard/approve/${requestId}`, httpOptions)
    .pipe(map(response => response));
  }

  reject(requestId): Observable<any> {
    return this.http.post(this.env.backendUrl + `/wizard/reject/${requestId}`, httpOptions)
    .pipe(map(response => response));
  }
}
