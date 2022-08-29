import { Component, OnInit } from '@angular/core';
import { Bookfields } from '../models/bookmodel';
import { BooksGetService } from '../services/books-get.service';
import { BuyBookService } from '../services/buy-book.service';

@Component({
  selector: 'app-user-buybook-search',
  templateUrl: './user-buybook-search.component.html',
  styleUrls: ['./user-buybook-search.component.css']
})
export class UserBuybookSearchComponent implements OnInit {
  currentuser=localStorage.getItem("currentUserName")
  searchedKeyword :string='';
  book:Bookfields[]=[];
  constructor(private bookservice:BuyBookService) { }


  ngOnInit(): void {
    this.getBooksuserbuy();

  }
  getBooksuserbuy(){
    this.bookservice.getBooksuserbuy().subscribe(
      response=>
      {this.book=response;

      })
  }

}
