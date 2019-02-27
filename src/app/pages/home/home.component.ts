import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: Array<any> = [];

  constructor(private booksService: BooksService) {
    this.booksService.index().then(result => {
      this.books = result.items;
    });
  }

  checkAsFav(book) {
    if (localStorage.getItem(book.id)) {
      localStorage.removeItem(book.id);
    } else {
      localStorage.setItem(book.id, JSON.stringify(book))
    }
  }

  isFav(id) {
    return localStorage.getItem(id);
  }

  ngOnInit() {
    
  }
}
