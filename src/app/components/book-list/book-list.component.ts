import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../services/books.service';
import {Book} from '../../book';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  // @ts-ignore
  bookForm: FormGroup;

  constructor(private booksService: BooksService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      name: [''],
      read: ['']
    });
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.booksService.getAllBooks().subscribe(res => {
      this.books = res;
    });
  }

  makeRead(i: number): void {
    const book = this.books[i];
    book.read = true;
    this.booksService.updateBook(book).subscribe(res => {
      console.log(res);
      this.getAllBooks();
    });
  }

  addBook(): void {
    const data = this.bookForm.value;
    this.booksService.addBook(data).subscribe(res => {
      this.getAllBooks();
    });
  }
}
