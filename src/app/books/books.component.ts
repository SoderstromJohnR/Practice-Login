import { Component } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: Book[] = [];
  cart: Book[] = [];

  isShowing: boolean = true;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}
}
