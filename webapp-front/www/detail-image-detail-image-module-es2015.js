(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-image-detail-image-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/detail-image/detail-image.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detail-image/detail-image.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"loadModule\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"3\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<img [src]=\"product.brand.logo\" alt=\"\">\t\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"9\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2>{{ product.name }}</h2>\n\t\t\t\t\t<h3>{{ product.reference }}</h3>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<p class=\"description\">{{ description }}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</ion-grid>\n\n\t<div class=\"content-image\">\n\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\" #slideCheck>\n\t\t\t<ion-slide *ngFor=\"let slide of detail_images\">\n\t\t\t\t<div class=\"image-content\">\n\t\t\t\t\t<div class=\"image-content-section\" *ngIf=\"slide.image_check\">\n\t\t\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/check.svg\">\n\t\t\t\t\t\t<img [src]=\"slide.image_check\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"image-content-section\" *ngIf=\"slide.image_fail\">\n\t\t\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/fail.svg\">\n\t\t\t\t\t\t<img [src]=\"slide.image_fail\">\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t\t\n\t</div>\n</ion-content>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/detail-image/detail-image.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/detail-image/detail-image.module.ts ***!
  \*****************************************************/
/*! exports provided: DetailImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailImagePageModule", function() { return DetailImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-image.page */ "./src/app/detail-image/detail-image.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _detail_image_page__WEBPACK_IMPORTED_MODULE_6__["DetailImagePage"]
    }
];
let DetailImagePageModule = class DetailImagePageModule {
};
DetailImagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detail_image_page__WEBPACK_IMPORTED_MODULE_6__["DetailImagePage"]]
    })
], DetailImagePageModule);



/***/ }),

/***/ "./src/app/detail-image/detail-image.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/detail-image/detail-image.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.logo img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.title {\n  line-height: 1.2;\n  padding-top: 1rem;\n}\n\n.title * {\n  margin: 0;\n  color: #6d6d6d;\n  font-size: 1.2rem;\n}\n\n.title h3 {\n  font-weight: 100;\n  font-size: 0.8rem;\n}\n\n.icon-svg {\n  position: absolute !important;\n  right: 35px;\n  top: 8px;\n  width: 46px !important;\n  z-index: 999;\n}\n\n.description {\n  color: #8c8a8a;\n  font-size: 0.9rem;\n}\n\n.content-image .image-content-section {\n  position: relative;\n}\n\n.content-image .image-content-section .icon-svg {\n  right: 7%;\n}\n\n.content-image .image-content-section img:not(.icon-svg) {\n  display: block;\n  border: 1px solid #ccc;\n  width: 90%;\n  margin: 0 auto 1rem;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2RqYW5nby9BZ2F0aGFEZW1vL1BpcmF0ZVNoaWVsZC93ZWJhcHAtZnJvbnQvc3JjL2FwcC9kZXRhaWwtaW1hZ2UvZGV0YWlsLWltYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWlsLWltYWdlL2RldGFpbC1pbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsU0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0FDQUQ7O0FER0E7RUFDQyxrQkFBQTtBQ0FEOztBREdBO0VBQ0MsU0FBQTtBQ0FEOztBRElBO0VBQ0MsY0FBQTtFQUNBLHNCQUFBO0VBQ0csVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1pbWFnZS9kZXRhaWwtaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG5cdHdpZHRoOiA3MHB4O1xuXHRoZWlnaHQ6IDcwcHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxvZ28gaW1ne1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnRpdGxle1xuXHRsaW5lLWhlaWdodDogMS4yO1xuXHRwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnRpdGxlICp7XG5cdG1hcmdpbjogMDtcblx0Y29sb3I6ICM2ZDZkNmQ7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGl0bGUgaDN7XG5cdGZvbnQtd2VpZ2h0OiAxMDA7XG5cdGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uaWNvbi1zdmd7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDM1cHg7XG4gICAgdG9wOiA4cHg7XG4gICAgd2lkdGg6IDQ2cHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cblxuLmRlc2NyaXB0aW9ue1xuXHRjb2xvcjogIzhjOGE4YTtcblx0Zm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5jb250ZW50LWltYWdlIC5pbWFnZS1jb250ZW50LXNlY3Rpb257XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRlbnQtaW1hZ2UgLmltYWdlLWNvbnRlbnQtc2VjdGlvbiAuaWNvbi1zdmd7XG5cdHJpZ2h0OiA3JTtcblxufVxuXG4uY29udGVudC1pbWFnZSAuaW1hZ2UtY29udGVudC1zZWN0aW9uIGltZzpub3QoLmljb24tc3ZnKXtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufSIsIi5sb2dvIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi50aXRsZSAqIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50aXRsZSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uaWNvbi1zdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDM1cHg7XG4gIHRvcDogOHB4O1xuICB3aWR0aDogNDZweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjOGM4YThhO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmNvbnRlbnQtaW1hZ2UgLmltYWdlLWNvbnRlbnQtc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRlbnQtaW1hZ2UgLmltYWdlLWNvbnRlbnQtc2VjdGlvbiAuaWNvbi1zdmcge1xuICByaWdodDogNyU7XG59XG5cbi5jb250ZW50LWltYWdlIC5pbWFnZS1jb250ZW50LXNlY3Rpb24gaW1nOm5vdCguaWNvbi1zdmcpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvIDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/detail-image/detail-image.page.ts":
/*!***************************************************!*\
  !*** ./src/app/detail-image/detail-image.page.ts ***!
  \***************************************************/
/*! exports provided: DetailImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailImagePage", function() { return DetailImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-services.service */ "./src/app/main-services.service.ts");




let DetailImagePage = class DetailImagePage {
    constructor(currRouter, service) {
        this.currRouter = currRouter;
        this.service = service;
        this.detail_images = [];
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
                    this.detail_images = data.detail_images;
                    this.description = data.description;
                    this.loadModule = true;
                });
            });
        });
    }
};
DetailImagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"] }
];
DetailImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-image',
        template: __webpack_require__(/*! raw-loader!./detail-image.page.html */ "./node_modules/raw-loader/index.js!./src/app/detail-image/detail-image.page.html"),
        styles: [__webpack_require__(/*! ./detail-image.page.scss */ "./src/app/detail-image/detail-image.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"]])
], DetailImagePage);



/***/ })

}]);
//# sourceMappingURL=detail-image-detail-image-module-es2015.js.map