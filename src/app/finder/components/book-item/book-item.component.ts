import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input()
  book;

  bookAuthors: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.book);

    this.bookAuthors = this.book.volumeInfo.authors.join(', ');
  }

}
