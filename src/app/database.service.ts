import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

export interface NewsModel {
  header: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  news: Observable<NewsModel[]>

  constructor(private readonly _db: AngularFireDatabase) {
    this.news = _db.list<NewsModel>('news').valueChanges();
  }

}
