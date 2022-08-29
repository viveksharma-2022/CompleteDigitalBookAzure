import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookfields } from '../models/bookmodel';
import { GuestLoginCred } from '../models/guestLogin';
import { BuyBookService } from '../services/buy-book.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  currentuser=localStorage.getItem("currentUserName")
  book : Bookfields = {
    title: '',
    category: '',
    price: 0,
    publisher: '',
    publisedDate: new Date,
    active: true,
    content: '',
    createdDate: new Date,
    modifiedDate: new Date,
    bookId: 0,
    logo: '',
    authorName: ''
  }


  pay : GuestLoginCred =
{
  buyerEmailId: '',
  buyerName: '',
  bookId: 0,
  title: '',
  paymentId: 0
}
  iconMargine = 2;
  iconWidth = 50;
  showIcon : boolean = false;
  filter = "book";
  hike = 0;
  books : Bookfields[] = [];

  constructor(private bookService : BuyBookService,private router : Router) { }

  hideAndShow(): void{
    this.showIcon = !this.showIcon;
  }

  increasePrice() : void{
    this.hike = this.hike+10;
  }
  decreasePrice() : void{
    this.hike = this.hike-10;
  }
  ngOnInit(): void {
    //this.getAllBooks();
  }

  getAllBooks()
  {
    debugger;
    this.bookService.getAllBooks()
    .subscribe(
      response => {
        this.books = response;
        console.log(this.books)
      });
  }

  bookPurchase(purchaseBookId : any)
  {

    this.router.navigate(['guestLogin'],{state:{bookId : purchaseBookId}});
    console.log(purchaseBookId)
  }

  onSearchSubmit()
  {

    this.bookService.filterBook(this.book).subscribe(response => {
      this.books = response;
      console.log(this.books)
    });
  }

}
