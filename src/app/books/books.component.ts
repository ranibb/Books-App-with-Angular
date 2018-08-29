import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[]
  constructor (private bookService: BookService) {}

  onClickImage(book) {
    book.previewMode = !book.previewMode;
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
  
}
