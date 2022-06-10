import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-pwa';

  constructor(private readonly _dbService: DatabaseService) { }

  ngOnInit(): void {
    this._dbService.news.subscribe((m) => console.log(m));
  }

}
