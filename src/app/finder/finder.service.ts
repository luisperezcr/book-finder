import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  constructor(private http: HttpClient) { }

  getBooks(): void {
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=steve+jobs&lan=en')
    .subscribe(books => {
      console.log(books);
    });
  }
}
