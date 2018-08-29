import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookService } from './book.service'

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
