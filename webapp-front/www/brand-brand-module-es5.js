(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-brand-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/brand/brand.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/brand/brand.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons routerLink=\"/brands\"  slot=\"start\">\n\t\t\t<ion-button>\n\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/home.svg\">\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title *ngIf=\"brand\">{{brand.name}}</ion-title>\t\t\t\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"logout()\"> \n\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/user_logout.svg\">\n\t\t\t</ion-button>\n\t\t</ion-buttons>\t\t\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"banner-section\" *ngIf=\"brand\">\n\t\t<div class=\"banner\">\n\t\t\t<img [src]=\"brand.banner\" alt=\"\">\n\t\t</div>\n\t\t<div class=\"content-banner\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row align-items-center>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t\t<img [src]=\"brand.logo\" alt=\"\">\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<h2>{{brand.name}}</h2>\n\t\t\t\t\t\t\t<h3>{{brand.brand_category_id.name}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</div>\n\t</div>\n\n\t<!--<div class=\"filters\">\n\t\t<ion-grid>\n\t\t\t<ion-row >\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<div class=\"content-input icon-input\">\n\t    \t\t\t\t<ion-input placeholder=\"Buscar Marca\"></ion-input>\t\n\t    \t\t\t\t<img src=\"assets/images/buscar.svg\" alt=\"\">\n\t    \t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<div class=\"content-input\">\n\t\t\t\t\t\t<ion-select placeholder=\"Categorias\" multiple=\"true\" interface=\"popover\">\n\t\t\t\t\t\t\t<ion-select-option value=\"f\">Female</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"m\">Male</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>-->\n\n\t<div class=\"list-products\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size-lg=\"2\" size-md=\"3\" size=\"6\" *ngFor=\"let product of productos\">\n\t\t\t\t\t<div class=\"product\" routerLink=\"/product/{{product.id}}\">\n\t\t\t\t\t\t<figure><img [src]=\"product.image\"></figure>\n\t\t\t\t\t\t<strong>{{ product.name }}</strong>\n\t\t\t\t\t\t<small>{{ product.reference }}</small>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n\n</ion-content>\n\n<app-footer></app-footer>\n"

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

module.exports = ".icon-svg {\n  width: 30px;\n  height: 30px;\n}\n\n.banner-section {\n  position: relative;\n}\n\n.banner-section:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n\n.banner-section .logo {\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.banner-section .logo img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.banner {\n  left: 0;\n  top: 0;\n}\n\n.banner img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  max-height: 200px;\n}\n\n.content-banner {\n  width: 100%;\n  position: absolute;\n  bottom: 50%;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n}\n\n.title h2, .title h3 {\n  color: white;\n  margin: 0;\n}\n\n.title h2 {\n  line-height: 1.2;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n.title h3 {\n  font-size: 1.2rem;\n  font-weight: 100;\n}\n\n.product figure {\n  margin: 0;\n  border: 1px solid #ccc;\n  height: 110px;\n  position: relative;\n  margin-bottom: 0.5rem;\n}\n\n.product figure img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  height: 100%;\n  object-fit: cover;\n}\n\n.product strong {\n  color: #6d6d6d;\n  display: block;\n  font-size: 0.8rem;\n}\n\n.product small {\n  color: #ccc;\n  display: block;\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL2JyYW5kL2JyYW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnJhbmQvYnJhbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxPQUFBO0VBQ0EsTUFBQTtBQ0NEOztBRENDO0VBQ0Msb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREdBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNBRDs7QURJQTtFQUNDLFlBQUE7RUFDQSxTQUFBO0FDREQ7O0FESUE7RUFDQyxnQkFBQTtFQUNHLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNDLFNBQUE7RUFDRyxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDREo7O0FESUE7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNILFlBQUE7RUFDQSxpQkFBQTtBQ0REOztBRElBO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0REOztBRElBO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0REIiwiZmlsZSI6InNyYy9hcHAvYnJhbmQvYnJhbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tc3Zne1xuXHR3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xufVxuXG4uYmFubmVyLXNlY3Rpb257XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhbm5lci1zZWN0aW9uOmJlZm9yZXtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiAwO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAubG9nb3tcblx0d2lkdGg6IDEwMHB4O1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAubG9nbyBpbWd7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYmFubmVye1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG5cblx0aW1ne1xuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC1oZWlnaHQ6IDIwMHB4O1xuXHR9XG59XG5cbi5jb250ZW50LWJhbm5lcntcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuXG59XG5cbi50aXRsZSBoMiwgLnRpdGxlIGgze1xuXHRjb2xvcjogd2hpdGU7XG5cdG1hcmdpbjogMDtcbn1cblxuLnRpdGxlIGgye1xuXHRsaW5lLWhlaWdodDogMS4yO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aXRsZSBoM3tcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ucHJvZHVjdCBmaWd1cmV7XG5cdG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLnByb2R1Y3QgZmlndXJlIGltZ3tcblx0d2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnByb2R1Y3Qgc3Ryb25ne1xuXHRjb2xvcjogIzZkNmQ2ZDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucHJvZHVjdCBzbWFsbHtcblx0Y29sb3I6ICNjY2M7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDAuN3JlbTtcbn0iLCIuaWNvbi1zdmcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uYmFubmVyLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iYW5uZXItc2VjdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYmFubmVyIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLmJhbm5lciBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uY29udGVudC1iYW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG59XG5cbi50aXRsZSBoMiwgLnRpdGxlIGgzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG59XG5cbi50aXRsZSBoMiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGl0bGUgaDMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnByb2R1Y3QgZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IDExMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLnByb2R1Y3QgZmlndXJlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wcm9kdWN0IHN0cm9uZyB7XG4gIGNvbG9yOiAjNmQ2ZDZkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wcm9kdWN0IHNtYWxsIHtcbiAgY29sb3I6ICNjY2M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn0iXX0= */"

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
    function BrandPage(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.productos = [];
    }
    BrandPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.getBrandById(params.id)
                .subscribe(function (data) {
                console.log(data);
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
    BrandPage.prototype.logout = function () {
        var _this = this;
        this.service.logOut().subscribe(function (data) {
            sessionStorage.removeItem('session_id');
            _this.router.navigate(['/login']);
        });
    };
    BrandPage.ctorParameters = function () { return [
        { type: _main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    BrandPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! raw-loader!./brand.page.html */ "./node_modules/raw-loader/index.js!./src/app/brand/brand.page.html"),
            styles: [__webpack_require__(/*! ./brand.page.scss */ "./src/app/brand/brand.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BrandPage);
    return BrandPage;
}());



/***/ })

}]);
//# sourceMappingURL=brand-brand-module-es5.js.map