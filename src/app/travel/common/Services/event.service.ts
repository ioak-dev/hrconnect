import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  @Output() clickedEvent = new EventEmitter<string>();

  buttonClicked(msg: string) {
    this.clickedEvent.emit(msg);
  }
}
