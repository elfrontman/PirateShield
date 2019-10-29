import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServicesService } from '../main-services.service';
let DetailImagePage = class DetailImagePage {
    constructor(currRouter, service) {
        this.currRouter = currRouter;
        this.service = service;
        this.images_check = [];
        this.images_fail = [];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
        };
    }
    goBack() {
        this;
    }
    ngOnInit() {
        this.currRouter.params.subscribe(params => {
            this.prevUrl = ['/product', params.id_product];
            this.service.getProduct(params.id_product)
                .subscribe(data => {
                this.product = data;
                this.service.getDetailMarkerProduct(params.id).subscribe((data) => {
                    this.images_check = data.detail_images.filter(x => x.type_image == 1);
                    this.images_fail = data.detail_images.filter(x => x.type_image == 2);
                    this.main_image_check = data.image_check;
                    this.main_image_fail = data.image_fail;
                    this.description = data.description;
                    this.loadModule = true;
                });
            });
        });
    }
};
DetailImagePage = __decorate([
    Component({
        selector: 'app-detail-image',
        templateUrl: './detail-image.page.html',
        styleUrls: ['./detail-image.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute, MainServicesService])
], DetailImagePage);
export { DetailImagePage };
//# sourceMappingURL=detail-image.page.js.map