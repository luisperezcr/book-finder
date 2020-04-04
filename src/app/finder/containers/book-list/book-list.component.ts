import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FinderService } from '../../finder.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnDestroy {

  subscription: Subscription;
  bookList: any;
  loading = false;

  constructor(private finderService: FinderService ) { }

  onSearch(input: string): void {
    this.loading = true;
    this.subscription = this.finderService.findBooks(input).subscribe((books) => {
      if (books.items.length) {
        this.bookList = books.items;
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
