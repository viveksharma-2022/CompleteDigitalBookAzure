import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookfields } from '../models/bookmodel';
import { BooksGetService } from '../services/books-get.service';

@Component({
  selector: 'app-book-show-comp',
  templateUrl: './book-show-comp.component.html',
  styleUrls: ['./book-show-comp.component.css']
})
export class BookShowCompComponent implements OnInit {
  currentUser=localStorage.getItem("currentUserName")
  book:Bookfields[]=[];
  searchedKeyword :any ='';
  user: string | null ='';

  constructor(private bookservice:BooksGetService, private router:Router ) { }

  ngOnInit(): void {

      this.getAllBooks();
      if(localStorage.getItem('currentUserName')!=null)
      {
        this.user=localStorage.getItem('currentUserName');
        this.searchedKeyword=this.user;
      }
  }
  getAllBooks(){
    this.bookservice.getAllBooks().subscribe(
      response=>
      {this.book=response;
        console.log(this.book)
      })
  }
  blockBook(bookId:Bookfields){

    this.bookservice.blockBook(bookId).subscribe(
      response=>{
        this.book=response;
      }
    )
    alert('Book blocked Successfully!');
  }
  UnblockBook(bookId:Bookfields){
    this.bookservice.UnblockBook(bookId).subscribe(
      response=>{
        this.book=response;
      }

    )
    alert('Book unblocked Successfully!');
  }
}
