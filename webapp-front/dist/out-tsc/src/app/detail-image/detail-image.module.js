import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailImagePage } from './detail-image.page';
import { SharedModule } from './../shared/shared.module';
const routes = [
    {
        path: '',
        component: DetailImagePage
    }
];
let DetailImagePageModule = class DetailImagePageModule {
};
DetailImagePageModule = __decorate([
    NgModule({
        imports: [
            SharedModule,
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DetailImagePage]
    })
], DetailImagePageModule);
export { DetailImagePageModule };
//# sourceMappingURL=detail-image.module.js.map