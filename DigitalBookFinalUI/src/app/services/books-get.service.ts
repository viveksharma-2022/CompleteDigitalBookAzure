import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Bookfields } from '../models/bookmodel';

@Injectable({
  providedIn: 'root'
})
export class BooksGetService {
  //baseUrl = 'https://localhost:7297';
  token=localStorage.getItem('token');
  httpheader = new HttpHeaders(
    {
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
    })

  constructor(private http: HttpClient) { }

  getAllBooks():Observable<Bookfields[]> {
    return this.http.get<Bookfields[]>('https://authorapivk.azurewebsites.net/Author/GetAllBooks');
  }
  GetBookById(id:Bookfields):Observable<any> {

    return this.http.post<any>('https://readerapi20220829074330.azurewebsites.net/Reader/GetBookById',id);
  }

  getBooksuserbuy():Observable<Bookfields[]> {
    return this.http.get<Bookfields[]>('https://authorapivk.azurewebsites.net/Author/GetAllBooks');
  }

  addBook(book: Bookfields):Observable<Bookfields[]> {

    return this.http.post<Bookfields[]>('https://authorapivk.azurewebsites.net/Author/AddBook',book, {headers : this.httpheader});
  }

  updateBook(book: Bookfields):Observable<Bookfields[]> {

    return this.http.put<Bookfields[]>('https://authorapivk.azurewebsites.net/Author/UpdateBook',book, {headers : this.httpheader});
  }
  getcurrentdata(bookId: any){
    return this.http.get<Bookfields[]>(`${'https://authorapivk.azurewebsites.net/Author/GetAllBooks'}/${bookId}`);
  }
  blockBook(book: Bookfields):Observable<Bookfields[]> {
    return this.http.put<Bookfields[]>('https://authorapivk.azurewebsites.net/Author/BlockBook',book, {headers : this.httpheader});
  }
  UnblockBook(book:Bookfields):Observable<Bookfields[]> {
    return this.http.put<Bookfields[]>('https://authorapivk.azurewebsites.net/Author/UnBlockBook',book, {headers : this.httpheader});
  }
}
