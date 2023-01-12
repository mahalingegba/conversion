import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsIdComponent } from './products-id/products-id.component';
import { OrderIdComponent } from './order-id/order-id.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ObservableComponent } from './observable/observable.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  // { path: '', redirectTo: 'products-view', pathMatch: 'full' },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'contacts', component: ContactsComponent },
  //guards
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AdminGuardGuard],
  },
  // {
  //   path: 'products',
  //   childern: [
  //     { path: 'view', component: ProductsViewComponent },
  //     { path: 'edit', component: ProductsEditComponent },
  //   ],
  // },

  // { path: 'products', component: ProductsComponent },
  // { path: 'products-view', component: ProductsViewComponent },
  // { path: 'products-edit', component: ProductsEditComponent },
  { path: 'products-id/:id', component: ProductsIdComponent },
  { path: 'orderId/:id2/:id3', component: OrderIdComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
