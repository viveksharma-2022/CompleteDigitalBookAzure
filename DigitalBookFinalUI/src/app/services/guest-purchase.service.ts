import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuestLoginCred, RefundUserPayment } from '../models/guestLogin';
import { InvoiceModel } from '../models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class GuestPurchaseService {
  //baseUrl='https://localhost:7297/api/getValidateAuthentication';
  readerurl="https://readerapi20220829074330.azurewebsites.net/Reader"
  baseURL="https://readerapi20220829074330.azurewebsites.net/Reader/GetAllPurchasedBook";
  constructor(private http:HttpClient) { }

  Validate(cred:GuestLoginCred):Observable<GuestLoginCred[]>{
    debugger;
    return this.http.post<GuestLoginCred[]>(this.baseURL,cred)
    }

    buyBook(payment: GuestLoginCred):Observable<GuestLoginCred[]> {
      return this.http.post<GuestLoginCred[]>(this.readerurl+'/PurchaseBook', payment);

  }

  GetAllPurchasedBook(pay : GuestLoginCred) :Observable<GuestLoginCred[]>{
      return this.http.post<GuestLoginCred[]>(this.baseURL, pay);
    }
    GetPurchasedBookByPaymentId(pay : InvoiceModel) :Observable<InvoiceModel[]>{
      debugger;
      return this.http.post<InvoiceModel[]>(this.readerurl+'/GetPurchasedbookbyId', pay);
    }
    GetRefund(paymentId:GuestLoginCred):Observable<GuestLoginCred[]>{
      console.log(paymentId);
      debugger;
      return this.http.post<GuestLoginCred[]>(this.readerurl+'/GetRefund',paymentId);

    }

}
