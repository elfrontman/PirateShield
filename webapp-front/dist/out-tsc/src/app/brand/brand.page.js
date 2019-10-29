import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainServicesService } from './../main-services.service';
import { ActivatedRoute } from '@angular/router';
let BrandPage = class BrandPage {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.productos = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.service.getBrandById(params.id)
                .subscribe((data) => {
                this.brand = data;
                this.getProducts();
            });
        });
    }
    getProducts() {
        this.service.getProductsByBrand(this.brand.id)
            .subscribe((data) => {
            this.productos = data;
        });
    }
};
BrandPage = __decorate([
    Component({
        selector: 'app-brand',
        templateUrl: './brand.page.html',
        styleUrls: ['./brand.page.scss'],
    }),
    __metadata("design:paramtypes", [MainServicesService, ActivatedRoute])
], BrandPage);
export { BrandPage };
//# sourceMappingURL=brand.page.js.map