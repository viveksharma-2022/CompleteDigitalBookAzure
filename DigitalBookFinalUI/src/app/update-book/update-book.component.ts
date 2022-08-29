import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookfields } from '../models/bookmodel';
import { BooksGetService } from '../services/books-get.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  books:Bookfields[] = [];
  book : Bookfields = {
    bookId :0,
    logo :'',
    title:'',
    category:'',
    price:0,
    authorName:'',
    publisher:'',
    publisedDate:new Date,
    content:'',
    active:false,
    createdDate:new Date,
    modifiedDate: new Date
  }
  id : number=0
  constructor(private bookservice:BooksGetService,private router:Router,private routers:ActivatedRoute) { }

  ngOnInit(): void {

    this.book.bookId=this.routers.snapshot.params['bookId']
    console.log(this.id)
    this.GetBookById()
    //this.updateBook();
  }

  updateBook() {
    this.bookservice.updateBook(this.book)
        .subscribe(
          response=>{
            console.log(response);
          }
         )
         this.GetBookById();
        this.router.navigate(['/authorHome']);
        this.GetBookById();
  }
  GetBookById(){

    this.bookservice.GetBookById(this.book)
    .subscribe
    ((response : any)=>
    {
      this.book=response;

    })
  }
}
