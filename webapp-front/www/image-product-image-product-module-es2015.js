(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-product-image-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/image-product/image-product.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/image-product/image-product.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"loadModule\">\n\n<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons routerLink=\"/brands\" slot=\"start\">\n\t\t\t<ion-button>\n\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/home.svg\">\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{ product.brand.name }}</ion-title>\t\t\n\t\t<ion-buttons (click)=\"logout()\" slot=\"end\">\n\t\t\t<ion-button > \n\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/user_logout.svg\">\n\t\t\t</ion-button>\n\t\t</ion-buttons>\t\t\t\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row >\n\t\t\t<ion-col size=\"3\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<img src=\"{{ product.brand.logo }}\" alt=\"\">\t\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"9\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2>{{ product.name }}</h2>\n\t\t\t\t\t<h3>{{ product.reference }}</h3>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<div class=\"content-slider\">\n\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\" #slideProduct>\n\t\t\t<ion-slide *ngFor=\"let slide of product.imageproduct_set\">\n\t\t\t\t<div class=\"image-content\">\n\t\t\t\t\t<img [src]=\"slide.image\">\n\t\t\t\t\t<div class=\"layer-marker\">\n\t\t\t\t\t\t<div appSquaredMarker *ngFor=\"let marker of slide.detail\" [routerLink]=\"['/detail-image', product.id ,marker.id]\" class=\"marker\" [ngStyle]=\"{top: marker.marker_y + '%', left: marker.marker_x + '%'}\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\n\t<div *ngIf=\"product.imageproduct_set.length > 1\" class=\"swiper-button-next\" (click)=\"onNextSlide()\"></div>\n\t<div *ngIf=\"product.imageproduct_set.length > 1\" class=\"swiper-button-prev\" (click)=\"onPrevSlide()\"></div>\n\t</div>\n\t\n\n\n</ion-content>\n\n<app-footer></app-footer>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/image-product/image-product.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/image-product/image-product.module.ts ***!
  \*******************************************************/
/*! exports provided: ImageProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageProductPageModule", function() { return ImageProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-product.page */ "./src/app/image-product/image-product.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _image_product_page__WEBPACK_IMPORTED_MODULE_6__["ImageProductPage"]
    }
];
let ImageProductPageModule = class ImageProductPageModule {
};
ImageProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_image_product_page__WEBPACK_IMPORTED_MODULE_6__["ImageProductPage"]]
    })
], ImageProductPageModule);



/***/ }),

/***/ "./src/app/image-product/image-product.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/image-product/image-product.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-svg {\n  width: 30px;\n  height: 30px;\n}\n\n.logo {\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.logo img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.title {\n  line-height: 1.2;\n  padding-top: 1rem;\n}\n\n.title * {\n  margin: 0;\n  color: #6d6d6d;\n  font-size: 1.2rem;\n}\n\n.title h3 {\n  font-weight: 100;\n  font-size: 0.8rem;\n}\n\n.content-slider {\n  width: 75%;\n  position: relative;\n  margin: 1rem auto 0;\n}\n\n.content-slider:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n\nion-slides {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.image-content {\n  height: 100%;\n  width: 100%;\n}\n\n.image-content img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  position: absolute;\n  left: 0;\n}\n\n.layer-marker {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.layer-marker .marker {\n  position: absolute;\n  width: 13.8%;\n  height: 13.8%;\n  border-radius: 50%;\n  border: 3px solid #ffb535;\n}\n\n.layer-marker .marker:before {\n  content: \"\";\n  position: absolute;\n  width: 40%;\n  height: 40%;\n  border-radius: 50%;\n  border: 5px solid #ffb535;\n  right: 50%;\n  bottom: 50%;\n  -webkit-transform: translate(50%, 50%);\n          transform: translate(50%, 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL2ltYWdlLXByb2R1Y3QvaW1hZ2UtcHJvZHVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ltYWdlLXByb2R1Y3QvaW1hZ2UtcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTtFQUNDLFNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTtFQUNDLFVBQUE7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDQyxXQUFBO0VBQ0MsY0FBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDQ0o7O0FERUE7RUFDQyxrQkFBQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDSjs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLXByb2R1Y3QvaW1hZ2UtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1zdmd7XG5cdHdpZHRoOiAzMHB4O1xuXHRoZWlnaHQ6IDMwcHg7XG59XG5cbi5sb2dve1xuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sb2dvIGltZ3tcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0b2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50aXRsZXtcblx0bGluZS1oZWlnaHQ6IDEuMjtcblx0cGFkZGluZy10b3A6IDFyZW07XG59XG5cbi50aXRsZSAqe1xuXHRtYXJnaW46IDA7XG5cdGNvbG9yOiAjNmQ2ZDZkO1xuXHRmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRpdGxlIGgze1xuXHRmb250LXdlaWdodDogMTAwO1xuXHRmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmNvbnRlbnQtc2xpZGVye1xuXHR3aWR0aDogNzUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwO1xufVxuXG4uY29udGVudC1zbGlkZXI6YWZ0ZXJ7XG4gY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1hZ2UtY29udGVudHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmltYWdlLWNvbnRlbnQgaW1ne1xuXHR3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbn1cblxuLmxheWVyLW1hcmtlcntcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmxheWVyLW1hcmtlciAubWFya2Vye1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMy44JTtcblx0aGVpZ2h0OiAxMy44JTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRib3JkZXI6IDNweCBzb2xpZCAjZmZiNTM1O1xufVxuXG4ubGF5ZXItbWFya2VyIC5tYXJrZXI6YmVmb3Jle1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogNDAlO1xuXHRoZWlnaHQ6IDQwJTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRib3JkZXI6IDVweCBzb2xpZCAjZmZiNTM1O1xuXHRyaWdodDogNTAlO1xuXHRib3R0b206IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xufVxuIiwiLmljb24tc3ZnIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGl0bGUge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnRpdGxlICoge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNmQ2ZDZkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRpdGxlIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5jb250ZW50LXNsaWRlciB7XG4gIHdpZHRoOiA3NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcbn1cblxuLmNvbnRlbnQtc2xpZGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1hZ2UtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS1jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cblxuLmxheWVyLW1hcmtlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ubGF5ZXItbWFya2VyIC5tYXJrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMy44JTtcbiAgaGVpZ2h0OiAxMy44JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZiNTM1O1xufVxuXG4ubGF5ZXItbWFya2VyIC5tYXJrZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDVweCBzb2xpZCAjZmZiNTM1O1xuICByaWdodDogNTAlO1xuICBib3R0b206IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/image-product/image-product.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/image-product/image-product.page.ts ***!
  \*****************************************************/
/*! exports provided: ImageProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageProductPage", function() { return ImageProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../main-services.service */ "./src/app/main-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ImageProductPage = class ImageProductPage {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.prevUrl = ['/brand', params.id];
            this.service.getProduct(params.id)
                .subscribe(data => {
                this.product = data[0];
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
    logout() {
        this.service.logOut().subscribe(data => {
            sessionStorage.removeItem('session_id');
            this.router.navigate(['/login']);
        });
    }
};
ImageProductPage.ctorParameters = () => [
    { type: _main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideProduct', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], ImageProductPage.prototype, "slides", void 0);
ImageProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-product',
        template: __webpack_require__(/*! raw-loader!./image-product.page.html */ "./node_modules/raw-loader/index.js!./src/app/image-product/image-product.page.html"),
        styles: [__webpack_require__(/*! ./image-product.page.scss */ "./src/app/image-product/image-product.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ImageProductPage);



/***/ })

}]);
//# sourceMappingURL=image-product-image-product-module-es2015.js.map