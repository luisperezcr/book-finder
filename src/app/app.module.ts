import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { FinderService } from './finder/finder.service';
import { SearchInputComponent } from './finder/components/search-input/search-input.component';
import { BookItemComponent } from './finder/components/book-item/book-item.component';
import { BookListComponent } from './finder/containers/book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    BookItemComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [FinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
