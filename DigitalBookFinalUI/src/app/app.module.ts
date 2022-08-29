import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { BookShowCompComponent } from './book-show-comp/book-show-comp.component';
import { SignupCompComponent } from './signup-comp/signup-comp.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserBuybookSearchComponent } from './user-buybook-search/user-buybook-search.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { GuestloginComponent } from './guestlogin/guestlogin.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    BookShowCompComponent,
    SignupCompComponent,
    AddBooksComponent,
    SearchBooksComponent,
    UpdateBookComponent,
    UserBuybookSearchComponent,
    GuestloginComponent,
    PurchaseHistoryComponent,
    InvoiceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
