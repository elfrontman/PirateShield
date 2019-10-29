import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'brands', loadChildren: './brands/brands.module#BrandsPageModule' },
    { path: 'brand/:id', loadChildren: './brand/brand.module#BrandPageModule' },
    { path: 'product/:id', loadChildren: './image-product/image-product.module#ImageProductPageModule' },
    { path: 'detail-image/:id_product/:id', loadChildren: './detail-image/detail-image.module#DetailImagePageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map