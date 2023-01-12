import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { ProductsViewComponent } from '../products-view/products-view.component';
import { AdminGuardGuard } from '../admin-guard.guard';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  {
    path: 'products',
    component: ProductsViewComponent,
    //canActivate: [AdminGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
