import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService, NewsModel } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  news$: Observable<NewsModel[]>;

  constructor(private readonly _dbService: DatabaseService) {
    this.news$ = this._dbService.news;
  }
}
