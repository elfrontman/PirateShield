import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainServicesService } from './../main-services.service';
let BrandsPage = class BrandsPage {
    constructor(service) {
        this.service = service;
        this.brands = [];
    }
    ngOnInit() {
        this.service.getBrands().subscribe((data) => {
            this.brands = data;
        });
    }
};
BrandsPage = __decorate([
    Component({
        selector: 'app-brands',
        templateUrl: './brands.page.html',
        styleUrls: ['./brands.page.scss'],
    }),
    __metadata("design:paramtypes", [MainServicesService])
], BrandsPage);
export { BrandsPage };
//# sourceMappingURL=brands.page.js.map