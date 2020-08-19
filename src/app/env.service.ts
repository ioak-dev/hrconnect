import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  public backendUrl = 'http://localhost:8080';
  public webUrl = 'http://localhost:4200';

  constructor() { }
}
