import { Injectable } from '@angular/core';
import { Book } from './model/book'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiRoot = "https://www.googleapis.com/books/v1/volumes"

  constructor(private http: HttpClient) { }

  getBooks(author: string) : Promise<Book[]> {
    return new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?q=inauthor:"${author}"&langRestrict=en`;
      this.http.get(apiURL).toPromise().then((data: any) => {
        let results : Book[] = data.items.map(item => {
          return new Book(
            this.getSafe(() => item.volumeInfo.title),
            this.getSafe(() => item.volumeInfo.authors),
            this.getSafe(() => item.volumeInfo.imageLinks.thumbnail)
          )
        })
        resolve(results);
      });
    });
  }

  private getSafe<T> (f: () => T) : T {
    try {
      return f();
    } catch (error) {
      return undefined;
    }
  }

}
