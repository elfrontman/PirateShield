(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terminos-terminos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/terminos/terminos.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/terminos/terminos.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-grid>\n\t\t\t<ion-row align-items-center>\n\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t<ion-buttons routerLink=\"/login\">\n\t\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/back.svg\">\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-buttons>\n\t\t\t\t</ion-col>\n\t\t\t\t\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div class=\"content-login\">\n\t\t<ion-item text-wrap  no-padding no-margin no-lines>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col no-padding no-margin>\n\t\t\t\t\t<ion-item no-padding no-margin no-lines>\n\t\t\t\t\t\t<ion-checkbox [(ngModel)]=\"agreed\" ></ion-checkbox> \n\t\t\t\t\t\t<ion-label   text-wrap>\n\t\t\t\t\t\tPara usar este sitio web debe acepta usted la politica de tratamiento de datos</ion-label>\n\t\t\t\t\t</ion-item> \n\t\t\t\t</ion-col> \n\t\t\t</ion-row> \n\t\t</ion-item>\n\t\t<a [href]=\"url_terms\" target=\"_blank\">Ver politica de tratamiento de datos</a>\n\n\t\t<ion-button shape=\"round\" expand=\"full\" routerLink=\"/brands\" [disabled]=\"!agreed\">\n\t\t\tAceptar y continuar\n\t\t\t<img src=\"./assets/images/arrow_login.svg\" class=\"icon-svg\">\n\t\t</ion-button>\n\t</div>\n\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/terminos/terminos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/terminos/terminos.module.ts ***!
  \*********************************************/
/*! exports provided: TerminosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosPageModule", function() { return TerminosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terminos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terminos.page */ "./src/app/terminos/terminos.page.ts");







const routes = [
    {
        path: '',
        component: _terminos_page__WEBPACK_IMPORTED_MODULE_6__["TerminosPage"]
    }
];
let TerminosPageModule = class TerminosPageModule {
};
TerminosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_terminos_page__WEBPACK_IMPORTED_MODULE_6__["TerminosPage"]]
    })
], TerminosPageModule);



/***/ }),

/***/ "./src/app/terminos/terminos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/terminos/terminos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-login {\n  width: 100%;\n  max-width: 320px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  -webkit-transform: translate(50%, 45%);\n          transform: translate(50%, 45%);\n}\n\n.image-logo {\n  max-width: 70%;\n  margin: 0 auto 2rem;\n  display: block;\n}\n\na {\n  display: block;\n  text-align: center;\n  padding: 1rem;\n}\n\nion-header .icon-svg {\n  height: 22px;\n  margin-bottom: 5px;\n  position: static;\n}\n\n.icon-svg {\n  height: 16px;\n  position: absolute;\n  right: 18px;\n}\n\nion-label {\n  line-height: 1.2 !important;\n  padding-left: 0.5rem;\n}\n\nion-button {\n  position: relative;\n  height: 50px;\n  font-weight: bold;\n}\n\nion-button ion-icon {\n  position: absolute;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2RqYW5nby9BZ2F0aGFEZW1vL1BpcmF0ZVNoaWVsZC93ZWJhcHAtZnJvbnQvc3JjL2FwcC90ZXJtaW5vcy90ZXJtaW5vcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Rlcm1pbm9zL3Rlcm1pbm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0csVUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDQ0o7O0FERUE7RUFDQyxjQUFBO0VBQ0csbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDQyxjQUFBO0VBQ0csa0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtFQUNHLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0MsMkJBQUE7RUFDRyxvQkFBQTtBQ0VKOztBRENBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNFRDs7QURDQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtBQ0VEIiwiZmlsZSI6InNyYy9hcHAvdGVybWlub3MvdGVybWlub3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtbG9naW57XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXgtd2lkdGg6IDMyMHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICBib3R0b206IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDQ1JSk7XG59XG5cbi5pbWFnZS1sb2dve1xuXHRtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDAgYXV0byAycmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5he1xuXHRkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuaW9uLWhlYWRlciAuaWNvbi1zdmd7XG5cdGhlaWdodDogMjJweDtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRwb3NpdGlvbjogc3RhdGljO1xufVxuXG4uaWNvbi1zdmd7XG5cdGhlaWdodDogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE4cHg7XG59XG5pb24tbGFiZWx7XG5cdGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuaW9uLWJ1dHRvbntcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRoZWlnaHQ6IDUwcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tYnV0dG9uIGlvbi1pY29ue1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAxcmVtO1xufSIsIi5jb250ZW50LWxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUwJTtcbiAgYm90dG9tOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNDUlKTtcbn1cblxuLmltYWdlLWxvZ28ge1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMnJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5pb24taGVhZGVyIC5pY29uLXN2ZyB7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4uaWNvbi1zdmcge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbmlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1idXR0b24gaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/terminos/terminos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/terminos/terminos.page.ts ***!
  \*******************************************/
/*! exports provided: TerminosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosPage", function() { return TerminosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../main-services.service */ "./src/app/main-services.service.ts");



let TerminosPage = class TerminosPage {
    constructor(_service) {
        this._service = _service;
    }
    ngOnInit() {
        this.url_terms = this._service.getFileURL('Politica_de_Privacidad.pdf');
    }
};
TerminosPage.ctorParameters = () => [
    { type: _main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"] }
];
TerminosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terminos',
        template: __webpack_require__(/*! raw-loader!./terminos.page.html */ "./node_modules/raw-loader/index.js!./src/app/terminos/terminos.page.html"),
        styles: [__webpack_require__(/*! ./terminos.page.scss */ "./src/app/terminos/terminos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"]])
], TerminosPage);



/***/ })

}]);
//# sourceMappingURL=terminos-terminos-module-es2015.js.map