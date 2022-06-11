import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface NewsModel {
  header: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private readonly _http: HttpClient) { }

  public getNews(): Observable<NewsModel[]> {
    return this._http.get<NewsModel[]>('https://dmg-ng-pwa-default-rtdb.europe-west1.firebasedatabase.app/news.json');
  }

}
