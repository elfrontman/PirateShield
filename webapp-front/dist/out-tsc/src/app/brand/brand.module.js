import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BrandPage } from './brand.page';
import { SharedModule } from './../shared/shared.module';
const routes = [
    {
        path: '',
        component: BrandPage
    }
];
let BrandPageModule = class BrandPageModule {
};
BrandPageModule = __decorate([
    NgModule({
        imports: [
            SharedModule,
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [BrandPage]
    })
], BrandPageModule);
export { BrandPageModule };
//# sourceMappingURL=brand.module.js.map