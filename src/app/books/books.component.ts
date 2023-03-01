import { Component } from '@angular/core';

interface Book {
  name: string,
  author: string,
  image: string,
  amount: number,
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'Clean code',
      author: 'gert T Yore',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 24,
    },
    {
      name: 'pragmatic Programmer',
      author: 'David thomas',
      image: 'https://m.media-amazon.com/images/I/41HXiIojloL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount: 16,
    },
  ];

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
