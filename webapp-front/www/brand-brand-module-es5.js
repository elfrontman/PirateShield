(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-brand-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/brand/brand.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/brand/brand.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-grid>\n\t\t\t<ion-row align-items-center>\n\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t<ion-buttons routerLink=\"/brands\">\n\t\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/home.svg\">\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-buttons>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t<ion-title>ADIDAS</ion-title>\t\t\t\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t<ion-buttons >\n\t\t\t\t\t\t\n\t\t\t\t\t</ion-buttons>\t\t\t\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"banner-section\" *ngIf=\"brand\">\n\t\t<div class=\"banner\">\n\t\t\t<img [src]=\"brand.banner\" alt=\"\">\n\t\t</div>\n\t\t<div class=\"content-banner\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row align-items-center>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t\t<img [src]=\"brand.logo\" alt=\"\">\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<h2>{{brand.name}}</h2>\n\t\t\t\t\t\t\t<h3>{{brand.brand_category_id.name}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</div>\n\t</div>\n\n\t<div class=\"filters\">\n\t\t<ion-grid>\n\t\t\t<ion-row >\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<div class=\"content-input icon-input\">\n\t    \t\t\t\t<ion-input placeholder=\"Buscar Marca\"></ion-input>\t\n\t    \t\t\t\t<img src=\"assets/images/buscar.svg\" alt=\"\">\n\t    \t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<div class=\"content-input\">\n\t\t\t\t\t\t<ion-select placeholder=\"Categorias\" multiple=\"true\" interface=\"popover\">\n\t\t\t\t\t\t\t<ion-select-option value=\"f\">Female</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"m\">Male</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n\n\t<div class=\"list-products\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size-lg=\"2\" size-md=\"3\" size=\"6\" *ngFor=\"let product of productos\">\n\t\t\t\t\t<div class=\"product\" routerLink=\"/product/{{product.id}}\">\n\t\t\t\t\t\t<figure><img [src]=\"product.image\"></figure>\n\t\t\t\t\t\t<strong>{{ product.name }}</strong>\n\t\t\t\t\t\t<small>{{ product.reference }}</small>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n\n</ion-content>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/brand/brand.module.ts":
/*!***************************************!*\
  !*** ./src/app/brand/brand.module.ts ***!
  \***************************************/
/*! exports provided: BrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPageModule", function() { return BrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brand.page */ "./src/app/brand/brand.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _brand_page__WEBPACK_IMPORTED_MODULE_6__["BrandPage"]
    }
];
var BrandPageModule = /** @class */ (function () {
    function BrandPageModule() {
    }
    BrandPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_brand_page__WEBPACK_IMPORTED_MODULE_6__["BrandPage"]]
        })
    ], BrandPageModule);
    return BrandPageModule;
}());



/***/ }),

/***/ "./src/app/brand/brand.page.scss":
/*!***************************************!*\
  !*** ./src/app/brand/brand.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-svg {\n  width: 30px;\n  height: 30px;\n}\n\n.banner-section {\n  position: relative;\n}\n\n.banner-section:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n\n.banner-section .logo {\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.banner-section .logo img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.banner {\n  left: 0;\n  top: 0;\n}\n\n.banner img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  max-height: 200px;\n}\n\n.content-banner {\n  width: 100%;\n  position: absolute;\n  bottom: 50%;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n}\n\n.title h2, .title h3 {\n  color: white;\n  margin: 0;\n}\n\n.title h2 {\n  line-height: 1.2;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n.title h3 {\n  font-size: 1.2rem;\n  font-weight: 100;\n}\n\n.product figure {\n  margin: 0;\n  border: 1px solid #ccc;\n  height: 110px;\n  position: relative;\n  margin-bottom: 0.5rem;\n}\n\n.product figure img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  height: 100%;\n  object-fit: cover;\n}\n\n.product strong {\n  color: #6d6d6d;\n  display: block;\n  font-size: 0.8rem;\n}\n\n.product small {\n  color: #ccc;\n  display: block;\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2RqYW5nby9BZ2F0aGFEZW1vL1BpcmF0ZVNoaWVsZC93ZWJhcHAtZnJvbnQvc3JjL2FwcC9icmFuZC9icmFuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2JyYW5kL2JyYW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsT0FBQTtFQUNBLE1BQUE7QUNDRDs7QURDQztFQUNDLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURHQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FDQUQ7O0FESUE7RUFDQyxZQUFBO0VBQ0EsU0FBQTtBQ0REOztBRElBO0VBQ0MsZ0JBQUE7RUFDRyxpQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDQyxTQUFBO0VBQ0csc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0RKOztBRElBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDSCxZQUFBO0VBQ0EsaUJBQUE7QUNERDs7QURJQTtFQUNDLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNERDs7QURJQTtFQUNDLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNERCIsImZpbGUiOiJzcmMvYXBwL2JyYW5kL2JyYW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXN2Z3tcblx0d2lkdGg6IDMwcHg7XG5cdGhlaWdodDogMzBweDtcbn1cblxuLmJhbm5lci1zZWN0aW9ue1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iYW5uZXItc2VjdGlvbjpiZWZvcmV7XG5cdGNvbnRlbnQ6ICcnO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHRvcDogMDtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmxvZ297XG5cdHdpZHRoOiAxMDBweDtcblx0aGVpZ2h0OiAxMDBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmxvZ28gaW1ne1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJhbm5lcntcblx0bGVmdDogMDtcblx0dG9wOiAwO1xuXG5cdGltZ3tcblx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtaGVpZ2h0OiAyMDBweDtcblx0fVxufVxuXG4uY29udGVudC1iYW5uZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcblxufVxuXG4udGl0bGUgaDIsIC50aXRsZSBoM3tcblx0Y29sb3I6IHdoaXRlO1xuXHRtYXJnaW46IDA7XG59XG5cbi50aXRsZSBoMntcblx0bGluZS1oZWlnaHQ6IDEuMjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGl0bGUgaDN7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnByb2R1Y3QgZmlndXJle1xuXHRtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5wcm9kdWN0IGZpZ3VyZSBpbWd7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGhlaWdodDogMTAwJTtcblx0b2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wcm9kdWN0IHN0cm9uZ3tcblx0Y29sb3I6ICM2ZDZkNmQ7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnByb2R1Y3Qgc21hbGx7XG5cdGNvbG9yOiAjY2NjO1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAwLjdyZW07XG59IiwiLmljb24tc3ZnIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmJhbm5lci1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFubmVyLXNlY3Rpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAubG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJhbm5lciB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYW5uZXIgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNvbnRlbnQtYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xufVxuXG4udGl0bGUgaDIsIC50aXRsZSBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGl0bGUgaDIge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpdGxlIGgzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5wcm9kdWN0IGZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiAxMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5wcm9kdWN0IGZpZ3VyZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucHJvZHVjdCBzdHJvbmcge1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucHJvZHVjdCBzbWFsbCB7XG4gIGNvbG9yOiAjY2NjO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjdyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/brand/brand.page.ts":
/*!*************************************!*\
  !*** ./src/app/brand/brand.page.ts ***!
  \*************************************/
/*! exports provided: BrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPage", function() { return BrandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../main-services.service */ "./src/app/main-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BrandPage = /** @class */ (function () {
    function BrandPage(service, route) {
        this.service = service;
        this.route = route;
        this.productos = [];
    }
    BrandPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.getBrandById(params.id)
                .subscribe(function (data) {
                _this.brand = data;
                _this.getProducts();
            });
        });
    };
    BrandPage.prototype.getProducts = function () {
        var _this = this;
        this.service.getProductsByBrand(this.brand.id)
            .subscribe(function (data) {
            _this.productos = data;
        });
    };
    BrandPage.ctorParameters = function () { return [
        { type: _main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    BrandPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! raw-loader!./brand.page.html */ "./node_modules/raw-loader/index.js!./src/app/brand/brand.page.html"),
            styles: [__webpack_require__(/*! ./brand.page.scss */ "./src/app/brand/brand.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BrandPage);
    return BrandPage;
}());



/***/ })

}]);
//# sourceMappingURL=brand-brand-module-es5.js.map