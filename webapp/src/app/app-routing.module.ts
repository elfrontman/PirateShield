import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuadGuard } from './guards/auth-guad.guard';

import { LoginComponent } from './pages/login/login.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { ViewBrandComponent } from './pages/view-brand/view-brand.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { ViewDetailComponent } from './pages/view-detail/view-detail.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: null,
    canActivate: [AuthGuadGuard],
    children: [
      { path: 'brands', component: BrandsComponent },
      { path: 'brand/:idBrand', component: ViewBrandComponent },
      { path: 'product/:idProduct', component: ViewProductComponent },
      { path: 'detail_product/:idProduct/:idDetail', component: ViewDetailComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
