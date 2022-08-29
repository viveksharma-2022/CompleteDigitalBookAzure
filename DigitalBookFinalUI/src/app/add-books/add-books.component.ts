import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookfields } from '../models/bookmodel';
import { BooksGetService } from '../services/books-get.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  title = 'book';
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
    active:true,
    createdDate:new Date,
    modifiedDate: new Date
  }

  constructor(private bookservice:BooksGetService, private router :Router) { }

  ngOnInit(): void {

  }

  create() {
    this.bookservice.addBook(this.book)
        .subscribe(
          response=>{
            console.log(response);
          }
         )
        this.router.navigate(['/authorHome']);

  }
}
