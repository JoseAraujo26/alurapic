import { Injectable } from '@angular/core';
import { startWith, Subject } from 'rxjs';
import { LoadingType } from './loading';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadSubject = new Subject<LoadingType>()

  get Loading () {
    return this.loadSubject.asObservable().pipe(startWith(LoadingType.STOPPED))
  }

  start() {
    this.loadSubject.next(LoadingType.LOADING)
  }

  stop() {
    this.loadSubject.next(LoadingType.STOPPED)
  }
}
