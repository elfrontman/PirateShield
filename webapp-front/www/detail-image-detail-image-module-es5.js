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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-image.page */ "./src/app/detail-image/detail-image.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _detail_image_page__WEBPACK_IMPORTED_MODULE_6__["DetailImagePage"]
    }
];
var DetailImagePageModule = /** @class */ (function () {
    function DetailImagePageModule() {
    }
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
    return DetailImagePageModule;
}());



/***/ }),

/***/ "./src/app/detail-image/detail-image.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/detail-image/detail-image.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.logo img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.title {\n  line-height: 1.2;\n  padding-top: 1rem;\n}\n\n.title * {\n  margin: 0;\n  color: #6d6d6d;\n  font-size: 1.2rem;\n}\n\n.title h3 {\n  font-weight: 100;\n  font-size: 0.8rem;\n}\n\n.icon-svg {\n  position: absolute !important;\n  right: 35px;\n  top: 8px;\n  width: 46px !important;\n  z-index: 999;\n}\n\n.description {\n  color: #8c8a8a;\n  font-size: 0.9rem;\n}\n\n.content-image .image-content-section {\n  position: relative;\n}\n\n.content-image .image-content-section .icon-svg {\n  right: 7%;\n}\n\n.content-image .image-content-section img:not(.icon-svg) {\n  display: block;\n  border: 1px solid #ccc;\n  width: 90%;\n  margin: 0 auto 1rem;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL2RldGFpbC1pbWFnZS9kZXRhaWwtaW1hZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9kZXRhaWwtaW1hZ2UvZGV0YWlsLWltYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUNBRDs7QURHQTtFQUNDLGtCQUFBO0FDQUQ7O0FER0E7RUFDQyxTQUFBO0FDQUQ7O0FESUE7RUFDQyxjQUFBO0VBQ0Esc0JBQUE7RUFDRyxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsLWltYWdlL2RldGFpbC1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcblx0d2lkdGg6IDcwcHg7XG5cdGhlaWdodDogNzBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubG9nbyBpbWd7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGl0bGV7XG5cdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4udGl0bGUgKntcblx0bWFyZ2luOiAwO1xuXHRjb2xvcjogIzZkNmQ2ZDtcblx0Zm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50aXRsZSBoM3tcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5pY29uLXN2Z3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICByaWdodDogMzVweDtcbiAgICB0b3A6IDhweDtcbiAgICB3aWR0aDogNDZweCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuXG4uZGVzY3JpcHRpb257XG5cdGNvbG9yOiAjOGM4YThhO1xuXHRmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmNvbnRlbnQtaW1hZ2UgLmltYWdlLWNvbnRlbnQtc2VjdGlvbntcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGVudC1pbWFnZSAuaW1hZ2UtY29udGVudC1zZWN0aW9uIC5pY29uLXN2Z3tcblx0cmlnaHQ6IDclO1xuXG59XG5cbi5jb250ZW50LWltYWdlIC5pbWFnZS1jb250ZW50LXNlY3Rpb24gaW1nOm5vdCguaWNvbi1zdmcpe1xuXHRkaXNwbGF5OiBibG9jaztcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvIDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59IiwiLmxvZ28ge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGl0bGUge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnRpdGxlICoge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNmQ2ZDZkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRpdGxlIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5pY29uLXN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMzVweDtcbiAgdG9wOiA4cHg7XG4gIHdpZHRoOiA0NnB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM4YzhhOGE7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uY29udGVudC1pbWFnZSAuaW1hZ2UtY29udGVudC1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGVudC1pbWFnZSAuaW1hZ2UtY29udGVudC1zZWN0aW9uIC5pY29uLXN2ZyB7XG4gIHJpZ2h0OiA3JTtcbn1cblxuLmNvbnRlbnQtaW1hZ2UgLmltYWdlLWNvbnRlbnQtc2VjdGlvbiBpbWc6bm90KC5pY29uLXN2Zykge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-services.service */ "./src/app/main-services.service.ts");




var DetailImagePage = /** @class */ (function () {
    function DetailImagePage(currRouter, service) {
        this.currRouter = currRouter;
        this.service = service;
        this.detail_images = [];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
        };
    }
    DetailImagePage.prototype.goBack = function () {
        this;
    };
    DetailImagePage.prototype.ngOnInit = function () {
        var _this = this;
        this.currRouter.params.subscribe(function (params) {
            _this.prevUrl = ['/product', params.id_product];
            _this.service.getProduct(params.id_product)
                .subscribe(function (data) {
                _this.product = data;
                _this.service.getDetailMarkerProduct(params.id).subscribe(function (data) {
                    _this.detail_images = data.detail_images;
                    _this.description = data.description;
                    _this.loadModule = true;
                });
            });
        });
    };
    DetailImagePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"] }
    ]; };
    DetailImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-image',
            template: __webpack_require__(/*! raw-loader!./detail-image.page.html */ "./node_modules/raw-loader/index.js!./src/app/detail-image/detail-image.page.html"),
            styles: [__webpack_require__(/*! ./detail-image.page.scss */ "./src/app/detail-image/detail-image.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"]])
    ], DetailImagePage);
    return DetailImagePage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-image-detail-image-module-es5.js.map