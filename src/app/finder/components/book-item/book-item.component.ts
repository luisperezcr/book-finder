import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input()
  book: any;

  bookAuthors: string;
  bookShortedDescription: string;

  constructor() { }

  ngOnInit(): void {
    this.bookAuthors = this.book.volumeInfo.authors ? this.book.volumeInfo.authors.join(', ') : '...';
    this.bookShortedDescription = this.book.volumeInfo.description ? `${this.book.volumeInfo.description.substring(0, 180)}...` : '...';
  }

}
