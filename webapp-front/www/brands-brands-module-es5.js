(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-brands-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/brands/brands.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/brands/brands.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>BIENVENIDO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"filters\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t    \t\t<ion-col size=\"7\">\n\t    \t\t\t<div class=\"content-input icon-input\">\n\t    \t\t\t\t<ion-input placeholder=\"Buscar Marca\" [(ngModel)]=\"filter_name\" (change)=\"filterName()\"></ion-input>\t\n\t    \t\t\t\t<img src=\"assets/images/buscar.svg\" alt=\"\">\n\t    \t\t\t</div>\n\t    \t\t</ion-col>\n\t    \t\t<ion-col>\n\t    \t\t\t<div class=\"content-input\">\n\t\t\t\t    \t<ion-select [(ngModel)]=\"filter_categories\" (ngModelChange)=\"filterCategories()\" placeholder=\"Categorias\" multiple=\"true\" interface=\"popover\">\n\t\t\t\t      \t\t<ion-select-option *ngFor=\"let cat of categories\" [value]=\"cat.id\">{{ cat.name }}</ion-select-option>\n\t\t\t\t    \t</ion-select>\n\t\t\t    \t</div>\n\t      \t\t</ion-col>\n\t      \t</ion-row>\n\t     </ion-grid>\n     </div>\n\n\t<div class=\"not-found-records\" *ngIf=\"filter_brands && filter_brands.length <= 0\">No hay registros disponibles</div>\n\n    <ion-list>\n  \t\t <ion-item class=\"orange-arrow\" lines=\"full\" *ngFor=\"let brand of filter_brands\" routerLink=\"/brand/{{brand.id}}\" >\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"brand.logo\">\n          </ion-thumbnail >\n          <ion-label>\n            <h2>{{ brand.name }}</h2>\n            <h3>{{ brand.brand_category_id.name }}</h3>\n          </ion-label>\n\n          <img src=\"./assets/images/arrow_item.svg\" class=\"icon-svg\">\n        </ion-item>\n  \t</ion-list>\n\n</ion-content>\n\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _brands_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brands.page */ "./src/app/brands/brands.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _brands_page__WEBPACK_IMPORTED_MODULE_6__["BrandsPage"]
    }
];
var BrandsPageModule = /** @class */ (function () {
    function BrandsPageModule() {
    }
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
    return BrandsPageModule;
}());



/***/ }),

/***/ "./src/app/brands/brands.page.scss":
/*!*****************************************!*\
  !*** ./src/app/brands/brands.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-thumbnail {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0.5rem 1rem 0.5rem 0rem;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.icon-svg {\n  height: 22px;\n}\n\n.filters {\n  margin-bottom: 1rem;\n}\n\n.not-found-records {\n  text-align: center;\n  color: #bdbdbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL2JyYW5kcy9icmFuZHMucGFnZS5zY3NzIiwic3JjL2FwcC9icmFuZHMvYnJhbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDRyxnQkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FER0E7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FEOztBREdBO0VBQ0MsWUFBQTtBQ0FEOztBRElBO0VBQ0MsbUJBQUE7QUNERDs7QURJQTtFQUNDLGtCQUFBO0VBQ0csY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYnJhbmRzL2JyYW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGh1bWJuYWlse1xuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtIDAuNXJlbSAwcmVtO1xufVxuXG5cbmlvbi10aXRsZXtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuXG4uaWNvbi1zdmd7XG5cdGhlaWdodDogMjJweDtcbn1cblxuXG4uZmlsdGVyc3tcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm5vdC1mb3VuZC1yZWNvcmRze1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbiIsImlvbi10aHVtYm5haWwge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMC41cmVtIDFyZW0gMC41cmVtIDByZW07XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmljb24tc3ZnIHtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uZmlsdGVycyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5ub3QtZm91bmQtcmVjb3JkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNiZGJkYmQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../main-services.service */ "./src/app/main-services.service.ts");



var BrandsPage = /** @class */ (function () {
    function BrandsPage(service) {
        this.service = service;
        this.brands = [];
    }
    BrandsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getBrands().subscribe(function (data) {
            _this.brands = data;
            _this.filter_brands = _this.brands;
        });
        this.service.getCategoriesBrand().subscribe(function (data) {
            _this.categories = data;
        });
    };
    BrandsPage.prototype.filterCategories = function () {
        var _this = this;
        this.filter_brands = this.brands;
        if (this.filter_categories.length > 0) {
            this.filter_brands = this.brands.filter(function (x) { return _this.filter_categories.indexOf(x.brand_category_id.id) > -1; });
        }
    };
    BrandsPage.prototype.filterName = function () {
        var _this = this;
        this.filter_brands = this.brands;
        if (this.filter_name.length > 0) {
            this.filter_brands = this.brands.filter(function (x) { return _this.filter_name.toLowerCase().indexOf(x.name.toLowerCase()) > -1; });
        }
    };
    BrandsPage.ctorParameters = function () { return [
        { type: _main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"] }
    ]; };
    BrandsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__(/*! raw-loader!./brands.page.html */ "./node_modules/raw-loader/index.js!./src/app/brands/brands.page.html"),
            styles: [__webpack_require__(/*! ./brands.page.scss */ "./src/app/brands/brands.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"]])
    ], BrandsPage);
    return BrandsPage;
}());



/***/ })

}]);
//# sourceMappingURL=brands-brands-module-es5.js.map