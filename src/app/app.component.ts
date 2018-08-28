import { Component } from '@angular/core';
import { Book } from './model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BooksApp';
  previewMode = true;
  books: Book[] = [
    {
      title: "Sunshine",
      authors: ["Alex Garland"],
      coverImage: "http://books.google.com/books/content?id=uqhlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    {
      title: "Ex Machina",
      authors: ["Alex Garland"],
      coverImage: "http://books.google.com/books/content?id=yvFMBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
      title: "Annihilation",
      authors: ["Alex Garland"],
      coverImage: "http://books.google.com/books/content?id=pjBHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
  ];
  onClickImage() {
    this.previewMode = !this.previewMode;
  }
}