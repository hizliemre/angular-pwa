import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationModel, NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {

  showPanel: boolean;
  notification: NotificationModel | null;
  notificationSub: Subscription;
  notificationTimeout: any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotification()
      .subscribe(n => {
        console.log(n);
        this.notification = n;
        this.showPanel = n !== null;

        this.notificationTimeout = setTimeout(() => {
          this.showPanel = false;
        }, 3000);
      });
  }

  dismissNotification() {
    this.showPanel = false;
  }

  ngOnDestroy() {
    this.notificationSub.unsubscribe();
    clearTimeout(this.notificationTimeout);
  }
}
