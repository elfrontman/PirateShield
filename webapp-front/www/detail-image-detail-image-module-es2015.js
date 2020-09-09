(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-image-detail-image-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/detail-image/detail-image.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detail-image/detail-image.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"loadModule\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"3\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<img [src]=\"product.brand.logo\" alt=\"\">\t\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"9\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2>{{ product.name }}</h2>\n\t\t\t\t\t<h3>{{ product.reference }}</h3>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<p class=\"description\">{{ description }}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</ion-grid>\n\n\t<div class=\"content-image\">\n\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\" #slideCheck>\n\t\t\t<ion-slide *ngFor=\"let slide of detail_images\">\n\t\t\t\t<div class=\"image-content\">\n\t\t\t\t\t<div class=\"image-content-section\" *ngIf=\"slide.image_check\">\n\t\t\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/check.svg\">\n\t\t\t\t\t\t<img [src]=\"slide.image_check\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"image-content-section\" *ngIf=\"slide.image_fail\">\n\t\t\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/fail.svg\">\n\t\t\t\t\t\t<img [src]=\"slide.image_fail\">\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<p class=\"description left-desctiption\" [innerHtml]=\"slide.description | safeHtml\"></p>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t\t\n\t</div>\n</ion-content>\n\n<app-footer></app-footer>\n"

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

module.exports = ".logo {\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.logo img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.title {\n  line-height: 1.2;\n  padding-top: 1rem;\n}\n\n.title * {\n  margin: 0;\n  color: #6d6d6d;\n  font-size: 1.2rem;\n}\n\n.title h3 {\n  font-weight: 100;\n  font-size: 0.8rem;\n}\n\n.icon-svg {\n  position: absolute !important;\n  right: 35px;\n  top: 8px;\n  width: 46px !important;\n  z-index: 999;\n}\n\n.description {\n  color: #8c8a8a;\n  font-size: 0.9rem;\n}\n\n.description.left-desctiption {\n  text-align: left;\n  padding: 0 1rem;\n}\n\n.content-image .image-content-section {\n  position: relative;\n}\n\n.content-image .image-content-section .icon-svg {\n  right: 7%;\n}\n\n.content-image .image-content-section img:not(.icon-svg) {\n  display: block;\n  border: 1px solid #ccc;\n  width: 90%;\n  margin: 0 auto 1rem;\n  position: relative;\n}\n\n@media only screen and (min-width: 1000px) {\n  .content-image {\n    width: 690px;\n    margin: 0 auto;\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL2RldGFpbC1pbWFnZS9kZXRhaWwtaW1hZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9kZXRhaWwtaW1hZ2UvZGV0YWlsLWltYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUNBRDs7QURFQztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBRE1BO0VBQ0Msa0JBQUE7QUNIRDs7QURNQTtFQUNDLFNBQUE7QUNIRDs7QURPQTtFQUNDLGNBQUE7RUFDQSxzQkFBQTtFQUNHLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FEUUE7RUFDQztJQUNDLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUNMQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsLWltYWdlL2RldGFpbC1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcblx0d2lkdGg6IDcwcHg7XG5cdGhlaWdodDogNzBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubG9nbyBpbWd7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGl0bGV7XG5cdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4udGl0bGUgKntcblx0bWFyZ2luOiAwO1xuXHRjb2xvcjogIzZkNmQ2ZDtcblx0Zm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50aXRsZSBoM3tcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5pY29uLXN2Z3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICByaWdodDogMzVweDtcbiAgICB0b3A6IDhweDtcbiAgICB3aWR0aDogNDZweCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuXG4uZGVzY3JpcHRpb257XG5cdGNvbG9yOiAjOGM4YThhO1xuXHRmb250LXNpemU6IDAuOXJlbTtcblxuXHQmLmxlZnQtZGVzY3RpcHRpb257XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRwYWRkaW5nOiAwIDFyZW07XG5cdH1cbn1cblxuXG5cbi5jb250ZW50LWltYWdlIC5pbWFnZS1jb250ZW50LXNlY3Rpb257XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRlbnQtaW1hZ2UgLmltYWdlLWNvbnRlbnQtc2VjdGlvbiAuaWNvbi1zdmd7XG5cdHJpZ2h0OiA3JTtcblxufVxuXG4uY29udGVudC1pbWFnZSAuaW1hZ2UtY29udGVudC1zZWN0aW9uIGltZzpub3QoLmljb24tc3ZnKXtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuXHQuY29udGVudC1pbWFnZSB7XG5cdFx0d2lkdGg6IDY5MHB4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdH1cbn0iLCIubG9nbyB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4udGl0bGUgKiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2ZDZkNmQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGl0bGUgaDMge1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmljb24tc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAzNXB4O1xuICB0b3A6IDhweDtcbiAgd2lkdGg6IDQ2cHggIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzhjOGE4YTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uZGVzY3JpcHRpb24ubGVmdC1kZXNjdGlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuLmNvbnRlbnQtaW1hZ2UgLmltYWdlLWNvbnRlbnQtc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRlbnQtaW1hZ2UgLmltYWdlLWNvbnRlbnQtc2VjdGlvbiAuaWNvbi1zdmcge1xuICByaWdodDogNyU7XG59XG5cbi5jb250ZW50LWltYWdlIC5pbWFnZS1jb250ZW50LXNlY3Rpb24gaW1nOm5vdCguaWNvbi1zdmcpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvIDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIHdpZHRoOiA2OTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59Il19 */"

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
                this.product = data[0];
                this.service.getDetailMarkerProduct(params.id).subscribe((data) => {
                    this.detail_images = data[0].detail_images;
                    this.description = data[0].description;
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