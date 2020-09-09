(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terminos-terminos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/terminos/terminos.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/terminos/terminos.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-grid>\n\t\t\t<ion-row align-items-center>\n\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t<ion-buttons routerLink=\"/login\">\n\t\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/back.svg\">\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-buttons>\n\t\t\t\t</ion-col>\n\t\t\t\t\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div class=\"content-login\">\n\t\t<ion-item text-wrap  no-padding no-margin no-lines>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col no-padding no-margin>\n\t\t\t\t\t<ion-item no-padding no-margin no-lines>\n\t\t\t\t\t\t<ion-checkbox [(ngModel)]=\"agreed\" ></ion-checkbox> \n\t\t\t\t\t\t<ion-label   text-wrap>\n\t\t\t\t\t\tPara usar este sitio web debe acepta usted la politica de tratamiento de datos</ion-label>\n\t\t\t\t\t</ion-item> \n\t\t\t\t</ion-col> \n\t\t\t</ion-row> \n\t\t</ion-item>\n\t\t<a [href]=\"url_terms\" target=\"_blank\">Ver politica de tratamiento de datos</a>\n\n\t\t<ion-button shape=\"round\" expand=\"full\" routerLink=\"/brands\" [disabled]=\"!agreed\">\n\t\t\tAceptar y continuar\n\t\t\t<img src=\"./assets/images/arrow_login.svg\" class=\"icon-svg\">\n\t\t</ion-button>\n\t</div>\n\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/main-services.service.ts":
/*!******************************************!*\
  !*** ./src/app/main-services.service.ts ***!
  \******************************************/
/*! exports provided: MainServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainServicesService", function() { return MainServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var MainServicesService = /** @class */ (function () {
    function MainServicesService(http) {
        this.http = http;
    }
    MainServicesService.prototype.getChatId = function () {
        if (!this.chat_id) {
            this.chat_id = sessionStorage.getItem('chat_id');
        }
        return this.chat_id;
    };
    MainServicesService.prototype.setChatId = function (chat_id) {
        sessionStorage.setItem('chat_id', chat_id);
        this.chat_id = chat_id;
    };
    MainServicesService.prototype.getUserId = function () {
        if (!this.user_id) {
            this.user_id = sessionStorage.getItem('user_id');
        }
        return this.user_id;
    };
    MainServicesService.prototype.setUserId = function (user_id) {
        sessionStorage.setItem('user_id', user_id);
        this.user_id = user_id;
    };
    MainServicesService.prototype.getIpClient = function () {
        return this.ip_client;
    };
    MainServicesService.prototype.setIpClient = function (ip) {
        this.ip_client = ip;
    };
    MainServicesService.prototype.getSessionId = function () {
        if (sessionStorage.getItem('session_id')) {
            this.session_id = sessionStorage.getItem('session_id');
        }
        return this.session_id;
    };
    MainServicesService.prototype.setSessionId = function (session_id) {
        sessionStorage.setItem('session_id', session_id);
        this.session_id = session_id;
    };
    MainServicesService.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    MainServicesService.prototype.getFileURL = function (url) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].STATIC_URL + '/files/' + url;
    };
    MainServicesService.prototype.service = function (url, data) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        var token = localStorage.getItem('token');
        var formData = new FormData();
        formData.append('token', token);
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var field = _a[_i];
            formData.append(field, data[field]);
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + url, { 'token': token }, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.requestSecure = function (url, formData) {
        if (formData === void 0) { formData = {}; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': "token " + this.getSessionId()
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.getBrands = function () {
        var token = localStorage.getItem('token');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/brands/?token=' + token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.getBrandById = function (id_brand) {
        var token = localStorage.getItem('token');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/brands/' + id_brand + '/?token=' + token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.getProductsByBrand = function (id_brand) {
        var token = localStorage.getItem('token');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/productbybrand/?search=' + id_brand + '&token=' + token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.getProduct = function (id_product) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/product/?search=' + id_product)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.getDetailMarkerProduct = function (id_marker) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/markerproduct/?search=' + id_marker)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.getCategoriesBrand = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/categories_brand/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.loginToken = function (token, user_name) {
        // this.headers = new HttpHeaders({
        //   'Content-Type': 'application/json',
        //   'Accept': 'application/json',
        //   'X-CSRFToken': this.getCookie('csrftoken')
        // })
        console.log(this.getCookie('csrftoken'));
        localStorage.setItem('token', token);
        localStorage.setItem('user_name', user_name);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/login_app/', { 'token': token, 'user_name': user_name })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.logOut = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/logout/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.setTokentChat = function (token_chat) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRFToken': this.getCookie('csrftoken')
        });
        var token = localStorage.getItem('token');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/token_chat/', { 'token_chat': token_chat, 'token': token })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.prototype.getChat = function (token_chat) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SoketIoConfig.url + '/chat_all/' + token_chat)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    MainServicesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MainServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MainServicesService);
    return MainServicesService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terminos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terminos.page */ "./src/app/terminos/terminos.page.ts");







var routes = [
    {
        path: '',
        component: _terminos_page__WEBPACK_IMPORTED_MODULE_6__["TerminosPage"]
    }
];
var TerminosPageModule = /** @class */ (function () {
    function TerminosPageModule() {
    }
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
    return TerminosPageModule;
}());



/***/ }),

/***/ "./src/app/terminos/terminos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/terminos/terminos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-login {\n  width: 100%;\n  max-width: 320px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  -webkit-transform: translate(50%, 45%);\n          transform: translate(50%, 45%);\n}\n\n.image-logo {\n  max-width: 70%;\n  margin: 0 auto 2rem;\n  display: block;\n}\n\na {\n  display: block;\n  text-align: center;\n  padding: 1rem;\n}\n\nion-header .icon-svg {\n  height: 22px;\n  margin-bottom: 5px;\n  position: static;\n}\n\n.icon-svg {\n  height: 16px;\n  position: absolute;\n  right: 18px;\n}\n\nion-label {\n  line-height: 1.2 !important;\n  padding-left: 0.5rem;\n}\n\nion-button {\n  position: relative;\n  height: 50px;\n  font-weight: bold;\n}\n\nion-button ion-icon {\n  position: absolute;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL3Rlcm1pbm9zL3Rlcm1pbm9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGVybWlub3MvdGVybWlub3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDRyxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURFQTtFQUNDLGNBQUE7RUFDRyxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNDLGNBQUE7RUFDRyxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0csa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDQywyQkFBQTtFQUNHLG9CQUFBO0FDRUo7O0FEQ0E7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0VEOztBRENBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0FDRUQiLCJmaWxlIjoic3JjL2FwcC90ZXJtaW5vcy90ZXJtaW5vcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1sb2dpbntcblx0d2lkdGg6IDEwMCU7XG5cdG1heC13aWR0aDogMzIwcHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTAlO1xuICAgIGJvdHRvbTogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNDUlKTtcbn1cblxuLmltYWdlLWxvZ297XG5cdG1heC13aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCBhdXRvIDJyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmF7XG5cdGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG5pb24taGVhZGVyIC5pY29uLXN2Z3tcblx0aGVpZ2h0OiAyMnB4O1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbi5pY29uLXN2Z3tcblx0aGVpZ2h0OiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMThweDtcbn1cbmlvbi1sYWJlbHtcblx0bGluZS1oZWlnaHQ6IDEuMiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuXG5pb24tYnV0dG9ue1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGhlaWdodDogNTBweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1idXR0b24gaW9uLWljb257XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDFyZW07XG59IiwiLmNvbnRlbnQtbG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA0NSUpO1xufVxuXG4uaW1hZ2UtbG9nbyB7XG4gIG1heC13aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0byAycmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbmlvbi1oZWFkZXIgLmljb24tc3ZnIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbi5pY29uLXN2ZyB7XG4gIGhlaWdodDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMThweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDEuMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../main-services.service */ "./src/app/main-services.service.ts");



var TerminosPage = /** @class */ (function () {
    function TerminosPage(_service) {
        this._service = _service;
    }
    TerminosPage.prototype.ngOnInit = function () {
        this.url_terms = this._service.getFileURL('Politica_de_Privacidad.pdf');
    };
    TerminosPage.ctorParameters = function () { return [
        { type: _main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"] }
    ]; };
    TerminosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terminos',
            template: __webpack_require__(/*! raw-loader!./terminos.page.html */ "./node_modules/raw-loader/index.js!./src/app/terminos/terminos.page.html"),
            styles: [__webpack_require__(/*! ./terminos.page.scss */ "./src/app/terminos/terminos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_services_service__WEBPACK_IMPORTED_MODULE_2__["MainServicesService"]])
    ], TerminosPage);
    return TerminosPage;
}());



/***/ })

}]);
//# sourceMappingURL=terminos-terminos-module-es5.js.map