import { Component, Input } from '@angular/core';
import { Alert } from './alert';
import { AlertService } from './alert.service';
import { AlertType } from './AlertType.enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() timeout = 3000;
  alerts: Alert[] = []

  constructor(
    private alertService: AlertService
  ) {
    this.alertService
      .getAlert()
      .subscribe(alert => {
        if (!alert) {
          this.alerts = []
        }
        alert !== null ? this.alerts.push(alert) : ''
        setTimeout(() => alert !== null ? this.removeAlert(alert) : '', this.timeout)
      })
  }

  removeAlert(alertToRemove: Alert) {
    this.alerts = this.alerts.filter(alert => alert !== alertToRemove)
  }

  getAlertClass(alert: Alert) {
    if(!alert) return '';
    switch (alert.alertType) {
      case AlertType.SUCCESS:
        return 'alert alert-success'
      case AlertType.WARMING:
        return 'alert alert-warning'
      case AlertType.DANGER:
        return 'alert alert-danger'
      case AlertType.INFO:
        return 'alert alert-info'
    }
  }
}
