import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FinderService } from '../../finder.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  bookList;

  constructor(private finderService: FinderService ) { }

  ngOnInit(): void {
  }

  onSearch(input: string): void {
    this.subscription = this.finderService.findBooks(input).subscribe((books) => {
      if (books.items.length) {
        this.bookList = books.items;
        // console.log(books.items);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
