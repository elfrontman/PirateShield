import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'brands', loadChildren: './brands/brands.module#BrandsPageModule' },
  { path: 'brand/:id', loadChildren: './brand/brand.module#BrandPageModule' },
  { path: 'product/:id', loadChildren: './image-product/image-product.module#ImageProductPageModule' },
  { path: 'detail-image', loadChildren: './detail-image/detail-image.module#DetailImagePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
