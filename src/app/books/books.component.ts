import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      title: "Sunshine",
      authors: ["Alex Garland"],
      coverImage: "http://books.google.com/books/content?id=uqhlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      previewMode : true
    },
    {
      title: "Ex Machina",
      authors: ["Alex Garland"],
      coverImage: "http://books.google.com/books/content?id=yvFMBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      previewMode : true
    },
    {
      title: "Annihilation",
      authors: ["Alex Garland"],
      coverImage: "http://books.google.com/books/content?id=pjBHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      previewMode : true
    }
  ];
  onClickImage(book) {
    book.previewMode = !book.previewMode;
  }

  ngOnInit() {
  }
  
}
