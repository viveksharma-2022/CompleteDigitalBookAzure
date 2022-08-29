import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Bookfields } from '../models/bookmodel';
import { GuestLoginCred } from '../models/guestLogin';
import { GuestPurchaseService } from '../services/guest-purchase.service';

@Component({
  selector: 'app-guestlogin',
  templateUrl: './guestlogin.component.html',
  styleUrls: ['./guestlogin.component.css']
})
export class GuestloginComponent implements OnInit {
  creds:GuestLoginCred[]=[];

  cred:GuestLoginCred={
    buyerEmailId: "",
    buyerName: "",
    bookId: 0,
    title: '',
    paymentId: 0
  }

  constructor(private guestservice:GuestPurchaseService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    debugger;
    if(this.cred.buyerEmailId!='' && this.cred.buyerName!='')
    {
      this.guestservice.buyBook(this.cred)
      .subscribe(
        response=>(
          this.creds=response

        )
      );
          alert("Book Bought Successfully!")
      this.router.navigate(['/purchaseHistory']);
    }
    else{
      alert("Please provide email address and name")
    }
  }

}
