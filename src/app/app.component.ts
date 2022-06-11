import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Observable } from 'rxjs';
import { DatabaseService, NewsModel } from './database.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  news$: Observable<NewsModel[]>;

  constructor(
    private readonly _dbService: DatabaseService,
    private _messaging: AngularFireMessaging,
    private _notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.news$ = this._dbService.getNews();
    this.requestPermission();
    this.listen();
  }

  requestPermission(): void {
    this._messaging.requestToken.subscribe(
      (token) => {
        console.log(token);
        // TODO: Bu token'ı serverda kaydetmek gerekir.
      }
    );
  }

  listen(): void {
    this._messaging.messages
      .subscribe((message: any) => {
        console.log(message);
        this._notificationService.setNotification({
          body: message.notification.body,
          title: message.notification.title,
          isVisible: true
        })
      });
  }
}
