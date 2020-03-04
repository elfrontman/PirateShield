(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-product-image-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/image-product/image-product.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/image-product/image-product.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"loadModule\">\n\n<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-grid>\n\t\t\t<ion-row align-items-center>\n\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t<ion-buttons routerLink=\"/brands\">\n\t\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/home.svg\">\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-buttons>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t<ion-title>{{ product.brand.name }}</ion-title>\t\t\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t<ion-buttons >\n\t\t\t\t\t\t\n\t\t\t\t\t</ion-buttons>\t\t\t\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row >\n\t\t\t<ion-col size=\"3\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<img src=\"{{ product.brand.logo }}\" alt=\"\">\t\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"9\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2>{{ product.name }}</h2>\n\t\t\t\t\t<h3>{{ product.reference }}</h3>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<div class=\"content-slider\">\n\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\" #slideProduct>\n\t\t\t<ion-slide *ngFor=\"let slide of product.imageproduct_set\">\n\t\t\t\t<div class=\"image-content\">\n\t\t\t\t\t<img [src]=\"slide.image\">\n\t\t\t\t\t<div class=\"layer-marker\">\n\t\t\t\t\t\t<div *ngFor=\"let marker of slide.detail\" [routerLink]=\"['/detail-image', product.id ,marker.id]\" class=\"marker\" [ngStyle]=\"{top: marker.marker_y + '%', left: marker.marker_x + '%'}\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t</div>\n\t\n\t<div class=\"swiper-button-next\" (click)=\"onNextSlide()\"></div>\n\t<div class=\"swiper-button-prev\" (click)=\"onPrevSlide()\"></div>\n\n</ion-content>\n\n<app-footer></app-footer>\n</ng-container>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-product.page */ "./src/app/image-product/image-product.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _image_product_page__WEBPACK_IMPORTED_MODULE_6__["ImageProductPage"]
    }
];
var ImageProductPageModule = /** @class */ (function () {
    function ImageProductPageModule() {
    }
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
    return ImageProductPageModule;
}());



/***/ }),

/***/ "./src/app/image-product/image-product.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/image-product/image-product.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-svg {\n  width: 30px;\n  height: 30px;\n}\n\n.logo {\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.logo img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.title {\n  line-height: 1.2;\n  padding-top: 1rem;\n}\n\n.title * {\n  margin: 0;\n  color: #6d6d6d;\n  font-size: 1.2rem;\n}\n\n.title h3 {\n  font-weight: 100;\n  font-size: 0.8rem;\n}\n\n.content-slider {\n  width: 75%;\n  position: relative;\n  margin: 1rem auto 0;\n}\n\n.content-slider:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n\nion-slides {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.image-content {\n  height: 100%;\n}\n\n.layer-marker {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.layer-marker .marker {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 3px solid #ffb535;\n}\n\n.layer-marker .marker:before {\n  content: \"\";\n  position: absolute;\n  width: 40%;\n  height: 40%;\n  border-radius: 50%;\n  border: 5px solid #ffb535;\n  right: 50%;\n  bottom: 50%;\n  -webkit-transform: translate(50%, 50%);\n          transform: translate(50%, 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2RqYW5nby9BZ2F0aGFEZW1vL1BpcmF0ZVNoaWVsZC93ZWJhcHAtZnJvbnQvc3JjL2FwcC9pbWFnZS1wcm9kdWN0L2ltYWdlLXByb2R1Y3QucGFnZS5zY3NzIiwic3JjL2FwcC9pbWFnZS1wcm9kdWN0L2ltYWdlLXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0VBQ0csa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0MsV0FBQTtFQUNDLGNBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0MsWUFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDQ0o7O0FERUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS1wcm9kdWN0L2ltYWdlLXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tc3Zne1xuXHR3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xufVxuXG4ubG9nb3tcblx0d2lkdGg6IDgwcHg7XG5cdGhlaWdodDogODBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubG9nbyBpbWd7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGl0bGV7XG5cdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4udGl0bGUgKntcblx0bWFyZ2luOiAwO1xuXHRjb2xvcjogIzZkNmQ2ZDtcblx0Zm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50aXRsZSBoM3tcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5jb250ZW50LXNsaWRlcntcblx0d2lkdGg6IDc1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcbn1cblxuLmNvbnRlbnQtc2xpZGVyOmFmdGVye1xuIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltYWdlLWNvbnRlbnR7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuLmxheWVyLW1hcmtlcntcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmxheWVyLW1hcmtlciAubWFya2Vye1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiA1MHB4O1xuXHRoZWlnaHQ6IDUwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym9yZGVyOiAzcHggc29saWQgI2ZmYjUzNTtcbn1cblxuLmxheWVyLW1hcmtlciAubWFya2VyOmJlZm9yZXtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDQwJTtcblx0aGVpZ2h0OiA0MCU7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym9yZGVyOiA1cHggc29saWQgI2ZmYjUzNTtcblx0cmlnaHQ6IDUwJTtcblx0Ym90dG9tOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbn1cbiIsIi5pY29uLXN2ZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi50aXRsZSAqIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50aXRsZSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uY29udGVudC1zbGlkZXIge1xuICB3aWR0aDogNzUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMXJlbSBhdXRvIDA7XG59XG5cbi5jb250ZW50LXNsaWRlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltYWdlLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYXllci1tYXJrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmxheWVyLW1hcmtlciAubWFya2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmI1MzU7XG59XG5cbi5sYXllci1tYXJrZXIgLm1hcmtlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmI1MzU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../main-services.service */ "./src/app/main-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ImageProductPage = /** @class */ (function () {
    function ImageProductPage(service, router) {
        this.service = service;
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
        };
    }
    ImageProductPage.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.prevUrl = ['/brand', params.id];
            _this.service.getProduct(params.id)
                .subscribe(function (data) {
                _this.product = data;
                _this.loadModule = true;
            });
        });
    };
    ImageProductPage.prototype.onNextSlide = function () {
        this.slides.slideNext();
    };
    ImageProductPage.prototype.onPrevSlide = function () {
        this.slides.slidePrev();
    };
    ImageProductPage.ctorParameters = function () { return [
        { type: _main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ImageProductPage);
    return ImageProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=image-product-image-product-module-es5.js.map