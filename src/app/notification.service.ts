import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NotificationModel {
  body: string;
  title: string;
  isVisible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification$: BehaviorSubject<NotificationModel | null> = new BehaviorSubject<NotificationModel | null>(null);

  constructor() { }

  setNotification(notification: NotificationModel) {
    this.notification$.next(notification);
  }

  getNotification() {
    return this.notification$.asObservable();
  }
}
