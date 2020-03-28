import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FinderService } from './finder/finder.service';
import { SearchInputComponent } from './finder/components/search-input/search-input.component';
import { BookItemComponent } from './finder/components/book-item/book-item.component';
import { BookListComponent } from './finder/containers/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    BookItemComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
