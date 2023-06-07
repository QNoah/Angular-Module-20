import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks = {
    id: 1,
    name: 'LOGBOEK',
    category: 'Sport',
    priority: 5,
    made: '07-06-2023',
  };
}
