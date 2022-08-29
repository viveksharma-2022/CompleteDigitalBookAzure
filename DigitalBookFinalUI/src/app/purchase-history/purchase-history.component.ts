import { Component, OnInit } from '@angular/core';
import { GuestLoginCred, RefundUserPayment } from '../models/guestLogin';
import { GuestPurchaseService } from '../services/guest-purchase.service';


@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  emailerror:boolean=false;
  purchasehistoryDiv:boolean=false;

  pay : GuestLoginCred =
  {
    buyerEmailId: '',
    buyerName: '',
    bookId: 0,
    title: '',
    paymentId: 0
  }
  refundPayment:RefundUserPayment={
    paymentId: 0
  }

  history : GuestLoginCred[] = [];
  showHistory = false;

  constructor(private paymentservice : GuestPurchaseService) { }

  ngOnInit(): void {
    //this.onSubmit();
  }

  onSubmit(){
    debugger;
    if(this.pay.buyerEmailId != '')
    {
      this.emailerror=false;
      this.paymentservice.GetAllPurchasedBook(this.pay)
      .subscribe
      (response => {this.history = response});
      console.log(this.history);
      this.showHistory = true;
    }
    else
    {
      this.emailerror=true;
      //alert('Please Enter Email Id!')
    }

  }

  GetRefund(paymentId: GuestLoginCred){
    alert("Book Refund Successfull!!")
    // this.refundPayment.paymentId=paymentId;
    this.paymentservice.GetRefund(paymentId)
    .subscribe(
      response=>{
        console.log(response);
        // alert('Book Refund Successfully!');
      },
    )
  }
}
