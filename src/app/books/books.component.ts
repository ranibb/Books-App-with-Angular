import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    new Book(
      "Sunshine",
      ["Alex Garland"],
      "http://books.google.com/books/content?id=uqhlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    ),
    new Book(
      "Ex Machina",
      ["Alex Garland"],
      "http://books.google.com/books/content?id=yvFMBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    ),
    new Book(
      "Annihilation",
      ["Alex Garland"],
      "http://books.google.com/books/content?id=pjBHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    )
  ];
  
  onClickImage(book) {
    book.previewMode = !book.previewMode;
  }

  ngOnInit() {
  }
  
}
