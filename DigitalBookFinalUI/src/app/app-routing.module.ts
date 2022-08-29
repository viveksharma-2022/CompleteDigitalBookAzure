import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { BookShowCompComponent } from './book-show-comp/book-show-comp.component';
import { GuestloginComponent } from './guestlogin/guestlogin.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { SignupCompComponent } from './signup-comp/signup-comp.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserBuybookSearchComponent } from './user-buybook-search/user-buybook-search.component';

const routes: Routes = [
  { path: 'authorHome', component: BookShowCompComponent },
  { path: 'login', component: LoginCompComponent },
  { path: 'signup', component: SignupCompComponent },
  { path:  'addBooks', component:AddBooksComponent},
  { path:  'searchbooks', component:SearchBooksComponent},
  { path:  'updatebook/:bookId', component:UpdateBookComponent},
  // { path:  'searchBooks',component:UserBuybookSearchComponent },
  {path : 'guestLogin', component: GuestloginComponent},
  {path : 'purchaseHistory', component: PurchaseHistoryComponent},
  {path : 'invoice', component:InvoiceComponent},
  { path: '', redirectTo: 'searchbooks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


