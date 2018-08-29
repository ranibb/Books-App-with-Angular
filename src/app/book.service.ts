import { Injectable } from '@angular/core';
import { Book } from './model/book'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  testData: Book[] = [
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

  constructor() { }

  getBooks() : Book[] {
    return this.testData;
  }
}
