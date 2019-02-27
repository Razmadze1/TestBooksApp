import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  endpoint: string = 'https://www.googleapis.com/books/v1/volumes?';
  constructor(private http: HttpClient) { }

  index(): Promise<any> {
    return this.http.get(this.endpoint + 'q={maxResults:10}').toPromise();
  }

  show(isbn): Promise<any> {
    return this.http.get(this.endpoint + 'q=id:'+isbn).toPromise();
  }
}