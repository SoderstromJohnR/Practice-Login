import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  inCart: boolean = false;

  constructor(private cartService: CartService) {};

  addToCart() {
    this.cartService.add(this.book);
    this.inCart = true;
  }

  removeFromCart() {
    this.cartService.remove(this.book);
    this.inCart = false;
  }
}
