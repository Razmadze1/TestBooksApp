import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  book: Object;
  constructor(private booksService: BooksService, private activatedRoute: ActivatedRoute) {
    this.booksService.show(this.activatedRoute.snapshot.params.id).then(result => {
      this.book = result.items[0];
    });
  }

  ngOnInit() {
  }

}
