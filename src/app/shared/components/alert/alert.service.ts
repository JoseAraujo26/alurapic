import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Alert } from './alert';
import { AlertType } from './AlertType.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertSubject: Subject<Alert | null> = new Subject<Alert | null>()
  keepAlertRouteChange: boolean = false

  constructor(
    router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAlertRouteChange) {
          this.keepAlertRouteChange = false
        } else {
          this.clear
        }
      }
    })
  }

  success(message: string, keepAlertRouteChange: boolean = false) {
    this.alert(AlertType.SUCCESS, message, keepAlertRouteChange)
  }

  warning(message: string, keepAlertRouteChange: boolean = false) {
    this.alert(AlertType.WARMING, message, keepAlertRouteChange)
  }

  danger(message: string, keepAlertRouteChange: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAlertRouteChange)
  }

  info(message: string, keepAlertRouteChange: boolean = false) {
    this.alert(AlertType.INFO, message, keepAlertRouteChange)
  }

  alert(alertType: AlertType, message: string, keepAlertRouteChange: boolean) {
    this.keepAlertRouteChange = keepAlertRouteChange
    this.alertSubject.next(new Alert(alertType, message))
  }

  getAlert() {
    return this.alertSubject.asObservable()
  }

  clear() {
    this.alertSubject.next(null)
  }
}
