import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private readonly _dbService: DatabaseService) { }

  ngOnInit(): void {
    this._dbService.news.subscribe((m) => console.log(m));
  }

}
