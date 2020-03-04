(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-brands-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/brands/brands.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/brands/brands.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>BIENVENIDO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"filters\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t    \t\t<ion-col size=\"7\">\n\t    \t\t\t<div class=\"content-input icon-input\">\n\t    \t\t\t\t<ion-input placeholder=\"Buscar Marca\"></ion-input>\t\n\t    \t\t\t\t<img src=\"assets/images/buscar.svg\" alt=\"\">\n\t    \t\t\t</div>\n\t    \t\t</ion-col>\n\t    \t\t<ion-col>\n\t    \t\t\t<div class=\"content-input\">\n\t\t\t\t    \t<ion-select placeholder=\"Categorias\" multiple=\"true\" interface=\"popover\">\n\t\t\t\t      \t\t<ion-select-option value=\"f\">Female</ion-select-option>\n\t\t\t\t      \t\t<ion-select-option value=\"m\">Male</ion-select-option>\n\t\t\t\t    \t</ion-select>\n\t\t\t    \t</div>\n\t      \t\t</ion-col>\n\t      \t</ion-row>\n\t     </ion-grid>\n     </div>\n\n\n    <ion-list>\n  \t\t <ion-item class=\"orange-arrow\" lines=\"full\" *ngFor=\"let brand of brands\" routerLink=\"/brand/{{brand.id}}\" >\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"brand.logo\">\n          </ion-thumbnail >\n          <ion-label>\n            <h2>{{ brand.name }}</h2>\n            <h3>{{ brand.brand_category_id.name }}</h3>\n          </ion-label>\n\n          <img src=\"./assets/images/arrow_item.svg\" class=\"icon-svg\">\n        </ion-item>\n  \t</ion-list>\n\n</ion-content>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/brands/brands.module.ts":
/*!*****************************************!*\
  !*** ./src/app/brands/brands.module.ts ***!
  \*****************************************/
/*! exports provided: BrandsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsPageModule", function() { return BrandsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _brands_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brands.page */ "./src/app/brands/brands.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _brands_page__WEBPACK_IMPORTED_MODULE_6__["BrandsPage"]
    }
];
let BrandsPageModule = class BrandsPageModule {
};
BrandsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_brands_page__WEBPACK_IMPORTED_MODULE_6__["BrandsPage"]]
    })
], BrandsPageModule);



/***/ }),

/***/ "./src/app/brands/brands.page.scss":
/*!*****************************************!*\
  !*** ./src/app/brands/brands.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-thumbnail {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0.5rem 1rem 0.5rem 0rem;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.icon-svg {\n  height: 22px;\n}\n\n.filters {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2RqYW5nby9BZ2F0aGFEZW1vL1BpcmF0ZVNoaWVsZC93ZWJhcHAtZnJvbnQvc3JjL2FwcC9icmFuZHMvYnJhbmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnJhbmRzL2JyYW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0csZ0JBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREdBO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBRDs7QURHQTtFQUNDLFlBQUE7QUNBRDs7QURJQTtFQUNDLG1CQUFBO0FDREQiLCJmaWxlIjoic3JjL2FwcC9icmFuZHMvYnJhbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWx7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMC41cmVtIDFyZW0gMC41cmVtIDByZW07XG59XG5cblxuaW9uLXRpdGxle1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDFyZW07XG59XG5cbi5pY29uLXN2Z3tcblx0aGVpZ2h0OiAyMnB4O1xufVxuXG5cbi5maWx0ZXJze1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4iLCJpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAuNXJlbSAxcmVtIDAuNXJlbSAwcmVtO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5pY29uLXN2ZyB7XG4gIGhlaWdodDogMjJweDtcbn1cblxuLmZpbHRlcnMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/brands/brands.page.ts":
/*!***************************************!*\
  !*** ./src/app/brands/brands.page.ts ***!
  \***************************************/
/*! exports provided: BrandsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsPage", function() { return BrandsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../main-services.service */ "./src/app/main-services.service.ts");



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
BrandsPage.ctorParameters = () => [
    { type: _main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"] }
];
BrandsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brands',
        template: __webpack_require__(/*! raw-loader!./brands.page.html */ "./node_modules/raw-loader/index.js!./src/app/brands/brands.page.html"),
        styles: [__webpack_require__(/*! ./brands.page.scss */ "./src/app/brands/brands.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"]])
], BrandsPage);



/***/ })

}]);
//# sourceMappingURL=brands-brands-module-es2015.js.map