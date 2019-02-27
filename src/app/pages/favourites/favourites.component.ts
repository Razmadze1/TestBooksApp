import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  get getFavourites() {
    let retArr = [];
    for (let i = 0; i < localStorage.length; i++){
      retArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }

    return retArr;
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
