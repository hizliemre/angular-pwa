import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationModel, NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {

  showPanel: boolean;
  notification: NotificationModel | null;
  notificationSub: Subscription;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotification()
      .subscribe(n => {
        console.log(n);
        this.notification = n;
        this.showPanel = n !== null;
      });
  }

  dismissNotification() {
    this.showPanel = false;
  }

  ngOnDestroy() {
    this.notificationSub.unsubscribe();
  }
}
