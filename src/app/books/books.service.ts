import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks () {
    return [
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
  }
}
