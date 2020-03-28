import { Component } from '@angular/core';
import { FinderService } from './finder/finder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-finder';

  constructor(private finderService: FinderService) {}

  getBooks() {
    this.finderService.getBooks();
  }
}
