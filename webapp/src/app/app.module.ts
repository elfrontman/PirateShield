import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { ViewBrandComponent } from './pages/view-brand/view-brand.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { ViewDetailComponent } from './pages/view-detail/view-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './inclues/header/header.component';
import { FooterComponent } from './inclues/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    ViewBrandComponent,
    ViewProductComponent,
    ViewDetailComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
