import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  link = 'http://localhost:8081/';

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<any> {
    return this.http.get(this.link + 'books');
  }

  getBook(id: number): Observable<any> {
    return this.http.get(this.link + 'books/' + id);
  }

  updateBook(book: Book): Observable<any> {
    const bookId = '' + book.id;
    const headers = new HttpHeaders();
    headers.set('id', bookId);
    console.log(headers);
    return this.http.put(this.link + 'books', book, {headers});
  }

  addBook(book: Book): Observable<any> {
    return this.http.post(this.link + 'books', book);
  }
}
