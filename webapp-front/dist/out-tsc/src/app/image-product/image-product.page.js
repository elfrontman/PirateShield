import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { MainServicesService } from './../main-services.service';
import { ActivatedRoute } from '@angular/router';
let ImageProductPage = class ImageProductPage {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
        };
    }
    ngOnInit() {
        this.router.params.subscribe(params => {
            this.prevUrl = ['/brand', params.id];
            this.service.getProduct(params.id)
                .subscribe(data => {
                this.product = data;
                this.loadModule = true;
            });
        });
    }
    onNextSlide() {
        this.slides.slideNext();
    }
    onPrevSlide() {
        this.slides.slidePrev();
    }
};
__decorate([
    ViewChild('slideProduct', { static: false }),
    __metadata("design:type", IonSlides)
], ImageProductPage.prototype, "slides", void 0);
ImageProductPage = __decorate([
    Component({
        selector: 'app-image-product',
        templateUrl: './image-product.page.html',
        styleUrls: ['./image-product.page.scss'],
    }),
    __metadata("design:paramtypes", [MainServicesService, ActivatedRoute])
], ImageProductPage);
export { ImageProductPage };
//# sourceMappingURL=image-product.page.js.map