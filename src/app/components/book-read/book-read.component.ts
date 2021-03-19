import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {Book} from '../../book';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.booksService.getAllBooks().subscribe(res => {
      this.books = res;
    });
  }

  makeNotRead(i: number): void {
    const book = this.books[i];
    book.read = false;
    this.booksService.updateBook(book).subscribe(res => {
      this.getAllBooks();
    });
  }
}
