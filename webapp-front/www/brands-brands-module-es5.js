(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-brands-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/brands/brands.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/brands/brands.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>BIENVENIDO</ion-title>\n\t\t<ion-buttons routerLink=\"/brands\" slot=\"end\">\n\t\t\t<ion-button (click)=\"alertLogout()\">\n\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/user_logout.svg\">\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"filters\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<div class=\"content-input icon-input\">\n\t\t\t\t\t\t<ion-input placeholder=\"Buscar\" [(ngModel)]=\"filter_name\" (ngModelChange)=\"filterName()\"></ion-input>\n\t\t\t\t\t\t<img src=\"assets/images/buscar.svg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<div class=\"content-input\">\n\t\t\t\t\t\t<ion-select [(ngModel)]=\"filter_categories\" (ngModelChange)=\"filterCategories()\"\n\t\t\t\t\t\t\tplaceholder=\"Categorias\" multiple=\"true\" interface=\"popover\">\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let cat of categories\" [value]=\"cat.id\">{{ cat.name }}\n\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n\n\t<div class=\"not-found-records\" *ngIf=\"filter_brands && filter_brands.length <= 0\">No hay registros disponibles</div>\n\n\t<ion-list>\n\t\t<ng-container *ngFor=\"let brand of filter_brands\">\n\t\t\t<ion-item class=\"orange-arrow\" lines=\"full\" routerLink=\"/brand/{{brand.id}}\">\n\t\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t\t<img [src]=\"brand.logo\">\n\t\t\t\t</ion-thumbnail>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h2>{{ brand.name }}</h2>\n\t\t\t\t\t<h3>{{ brand.brand_category_id.name }}</h3>\n\t\t\t\t</ion-label>\n\t\t\t\t<img src=\"./assets/images/arrow_item.svg\" class=\"icon-svg\">\n\t\t\t</ion-item>\n\t\t\t<ng-container *ngIf=\"filter_name\">\n\t\t\t\t<ion-item *ngFor=\"let product of brand.products\" class=\"orange-arrow sublist\" lines=\"full\" routerLink=\"/product/{{product.id}}\">\n\t\t\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t\t\t<img [src]=\"product.image\">\n\t\t\t\t\t</ion-thumbnail>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<h2>{{ product.name }}</h2>\n\t\t\t\t\t\t<h3>REF: {{ product.reference }}</h3>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ng-container>\n\n\t\t</ng-container>\n\n\t</ion-list>\n\n</ion-content>\n\n<app-footer></app-footer>"

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

module.exports = "ion-thumbnail {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0.5rem 1rem 0.5rem 0rem;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.icon-svg {\n  height: 22px;\n}\n\n.filters {\n  margin-bottom: 1rem;\n}\n\n.not-found-records {\n  text-align: center;\n  color: #bdbdbd;\n}\n\n.sublist {\n  --ion-background-color:#f9f9f9;\n}\n\n.sublist ion-thumbnail {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0.5rem 1rem 0.5rem 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL2JyYW5kcy9icmFuZHMucGFnZS5zY3NzIiwic3JjL2FwcC9icmFuZHMvYnJhbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDRyxnQkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FER0E7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FEOztBREdBO0VBQ0MsWUFBQTtBQ0FEOztBRElBO0VBQ0MsbUJBQUE7QUNERDs7QURJQTtFQUNDLGtCQUFBO0VBQ0csY0FBQTtBQ0RKOztBRElBO0VBQ0MsOEJBQUE7QUNERDs7QURHQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9icmFuZHMvYnJhbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWx7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMC41cmVtIDFyZW0gMC41cmVtIDByZW07XG59XG5cblxuaW9uLXRpdGxle1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDFyZW07XG59XG5cbi5pY29uLXN2Z3tcblx0aGVpZ2h0OiAyMnB4O1xufVxuXG5cbi5maWx0ZXJze1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubm90LWZvdW5kLXJlY29yZHN7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLnN1Ymxpc3R7XG5cdC0taW9uLWJhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtcblxuXHRpb24tdGh1bWJuYWlse1xuXHRcdHdpZHRoOiA0MHB4O1xuXHRcdGhlaWdodDogNDBweDtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW46IDAuNXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xuXHR9XG59IiwiaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbSAwLjVyZW0gMHJlbTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uaWNvbi1zdmcge1xuICBoZWlnaHQ6IDIycHg7XG59XG5cbi5maWx0ZXJzIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm5vdC1mb3VuZC1yZWNvcmRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLnN1Ymxpc3Qge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjk7XG59XG4uc3VibGlzdCBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAuNXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../main-services.service */ "./src/app/main-services.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var BrandsPage = /** @class */ (function () {
    function BrandsPage(service, router, alertController) {
        this.service = service;
        this.router = router;
        this.alertController = alertController;
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
            this.filter_brands = this.brands.filter(function (x) {
                var search = _this.filter_name.toLowerCase();
                var nameBrand = search.indexOf(x.name.toLowerCase()) > -1
                    || search.indexOf(x.description ? x.description.toLowerCase() : null) > -1;
                if (nameBrand) {
                    return true;
                }
                var produts = x.products.filter(function (prd) {
                    var exist = prd.name.toLowerCase().indexOf(search) > -1
                        || (prd.reference ? prd.reference.toLowerCase().indexOf(search) > -1 : false)
                        || (prd.description ? prd.description.toLowerCase().indexOf(search) > -1 : false);
                    return exist;
                });
                return produts.length > 0;
            });
        }
    };
    BrandsPage.prototype.alertLogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cerrar sesión',
                            message: '¿Desea cerrar la sesión?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                }, {
                                    text: 'Aceptar',
                                    handler: function () {
                                        _this.logout();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BrandsPage.prototype.logout = function () {
        var _this = this;
        this.service.logOut().subscribe(function (data) {
            sessionStorage.removeItem('session_id');
            _this.router.navigate(['/login']);
        });
    };
    BrandsPage.ctorParameters = function () { return [
        { type: _main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    BrandsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__(/*! raw-loader!./brands.page.html */ "./node_modules/raw-loader/index.js!./src/app/brands/brands.page.html"),
            styles: [__webpack_require__(/*! ./brands.page.scss */ "./src/app/brands/brands.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], BrandsPage);
    return BrandsPage;
}());



/***/ })

}]);
//# sourceMappingURL=brands-brands-module-es5.js.map