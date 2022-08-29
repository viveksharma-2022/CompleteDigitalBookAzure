import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookfields } from '../models/bookmodel';

@Injectable({
  providedIn: 'root'
})
export class BuyBookService {
  baseUrl = 'https://localhost:7297';
  thisURL='https://localhost:7159/Reader';
  constructor(private http:HttpClient) { }

  getBooksuserbuy():Observable<Bookfields[]> {
    return this.http.get<Bookfields[]>('https://authorapivk.azurewebsites.net/Author/GetAllBooks');
  }


  getAllBooks():Observable<Bookfields[]>{
    //return this.http.get<Books[]>('https://readerapiservice.azurewebsites.net/api/Reader/GetBook')
    return this.http.get<Bookfields[]>(this.baseUrl+'/reader/books/getbooks')

}
  filterBook(book: Bookfields):Observable<Bookfields[]>{

    let queryParams = new HttpParams();
      queryParams = queryParams.append("authorName",book.authorName);
      queryParams = queryParams.append("category",book.category);
      queryParams = queryParams.append("price",book.price);

    //return this.http.post<Books[]>('https://readerapiservice.azurewebsites.net/api/Reader/SearchBook',book)
    return this.http.get<Bookfields[]>('https://readerapi20220829074330.azurewebsites.net/Reader/SearchBookByCategories',{params:queryParams});
}

}
