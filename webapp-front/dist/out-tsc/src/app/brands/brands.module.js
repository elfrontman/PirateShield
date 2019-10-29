import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BrandsPage } from './brands.page';
import { SharedModule } from './../shared/shared.module';
const routes = [
    {
        path: '',
        component: BrandsPage
    }
];
let BrandsPageModule = class BrandsPageModule {
};
BrandsPageModule = __decorate([
    NgModule({
        imports: [
            SharedModule,
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [BrandsPage]
    })
], BrandsPageModule);
export { BrandsPageModule };
//# sourceMappingURL=brands.module.js.map