import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ImageProductPage } from './image-product.page';
import { SharedModule } from './../shared/shared.module';
const routes = [
    {
        path: '',
        component: ImageProductPage
    }
];
let ImageProductPageModule = class ImageProductPageModule {
};
ImageProductPageModule = __decorate([
    NgModule({
        imports: [
            SharedModule,
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ImageProductPage]
    })
], ImageProductPageModule);
export { ImageProductPageModule };
//# sourceMappingURL=image-product.module.js.map