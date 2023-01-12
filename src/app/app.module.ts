import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HighlightPipe } from './highlight.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { TodoModule } from './todo/todo.module';
import { CompletedTasksComponent } from './todo/completed-tasks/completed-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneNumberPipe } from './phone-number.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsIdComponent } from './products-id/products-id.component';
import { OrderIdComponent } from './order-id/order-id.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ObservableComponent } from './observable/observable.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlightPipe,
    TasksComponent,
    PhoneNumberPipe,
    ProductsComponent,
    ProductsViewComponent,
    ProductsEditComponent,
    ProductsIdComponent,
    OrderIdComponent,
    SearchComponent,
    PageNotFoundComponent,
    AdminHomeComponent,
    SignInComponent,
    CheckoutComponent,
    ObservableComponent,
    ContactsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    //{ provide: LocationStrategy, useClass: HashLocationStrategy }
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
