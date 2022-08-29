import { Component, OnInit } from '@angular/core';
import { GuestLoginCred } from '../models/guestLogin';
import { InvoiceModel } from '../models/Invoice';
import { GuestPurchaseService } from '../services/guest-purchase.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  showHistory = false;
  pay : InvoiceModel =
  {
    buyerName: '',
    bookId: 0,
    title: '',
    paymentId: 0,
    price: 0,
    paymentDate: new Date
  }

  history : InvoiceModel[] = [];

  constructor(private paymentservice:GuestPurchaseService) { }

  ngOnInit(): void {
  }
  onSubmit(){

    if(this.pay.paymentId)
    {
      this.paymentservice.GetPurchasedBookByPaymentId(this.pay)
      .subscribe
      (response => {this.history = response});
      console.log(this.history);
      this.showHistory = true;

    }
    else
    {
      alert("Please provide PaymentId")
    }

}
}
