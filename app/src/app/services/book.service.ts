import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  urlAPI = environment.urlAPI;

  getBooks() {
    return this.http.get<IBook[]>(`${this.urlAPI}/books`);
  }

  getBook(id : number) {
    return this.http.get<IBook>(`${this.urlAPI}/books/${id}`);
  }

  postBook(book: IBook) {
    return this.http.post<IBook>(`${this.urlAPI}/books`, book);
  }

  updateBook(book : IBook) {
    return this.http.put<IBook>(`${this.urlAPI}/books`, book);
  }
  
  deleteBook(id : number) {
    return this.http.delete(`${this.urlAPI}/books/${id}`);
  }
}
