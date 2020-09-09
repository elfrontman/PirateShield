(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<div class=\"content-login\">\n\t\t<img class=\"image-logo\" src=\"assets/images/logo.svg\"/>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\">Nombre</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"user_name\" #tokeninput autofocus=\"true\"></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-item class=\"last-ion-item\">\n\t\t\t<ion-label position=\"stacked\">Token</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"token\" #tokeninput ></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-button shape=\"round\" expand=\"full\" (click)=\"login()\">\n\t\t\tEntrar\n\t\t\t<img src=\"./assets/images/arrow_login.svg\" class=\"icon-svg\">\n\t\t</ion-button>\n\t</div>\n\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-login {\n  width: 100%;\n  max-width: 320px;\n  padding: 1rem 3rem;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  -webkit-transform: translate(50%, 45%);\n          transform: translate(50%, 45%);\n}\n\n.image-logo {\n  max-width: 70%;\n  margin: 0 auto 2rem;\n  display: block;\n}\n\n.icon-svg {\n  height: 16px;\n  position: absolute;\n  right: 18px;\n}\n\n.last-ion-item {\n  margin-bottom: 3rem;\n}\n\nion-button {\n  position: relative;\n  height: 50px;\n  font-weight: bold;\n}\n\nion-button ion-icon {\n  position: absolute;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNHLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0MsY0FBQTtFQUNHLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0MsWUFBQTtFQUNHLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0MsbUJBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWxvZ2lue1xuXHR3aWR0aDogMTAwJTtcblx0bWF4LXdpZHRoOiAzMjBweDtcblx0cGFkZGluZzogMXJlbSAzcmVtO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICBib3R0b206IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDQ1JSk7XG59XG5cbi5pbWFnZS1sb2dve1xuXHRtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDAgYXV0byAycmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaWNvbi1zdmd7XG5cdGhlaWdodDogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE4cHg7XG59XG5cbi5sYXN0LWlvbi1pdGVte1xuXHRtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG5pb24tYnV0dG9ue1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGhlaWdodDogNTBweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1idXR0b24gaW9uLWljb257XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDFyZW07XG59IiwiLmNvbnRlbnQtbG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDQ1JSk7XG59XG5cbi5pbWFnZS1sb2dvIHtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvIDJyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaWNvbi1zdmcge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG59XG5cbi5sYXN0LWlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../main-services.service */ "./src/app/main-services.service.ts");





let LoginPage = class LoginPage {
    constructor(router, mS, toastController) {
        this.router = router;
        this.mS = mS;
        this.toastController = toastController;
        this.token = '6mB4Gq';
    }
    ngOnInit() {
    }
    login() {
        this.mS.loginToken(this.token, this.user_name)
            .subscribe((data) => {
            console.log(data);
            if (!data.error) {
                this.mS.setIpClient(data.ip);
                this.mS.setSessionId(data.session_id);
                this.mS.setChatId(data.chat_id);
                this.mS.setUserId(data.user_id);
                this.router.navigateByUrl('/terminos');
                return;
            }
        }, error => {
            console.log(error);
            this.showToast("");
        });
    }
    showToast(message) {
        this.toast = this.toastController.create({
            message: 'Token invalido',
            duration: 6000,
            showCloseButton: true,
            closeButtonText: 'Cerrar',
            animated: true,
            cssClass: "error-toast"
        }).then((toastData) => {
            toastData.present();
        });
    }
    HideToast() {
        this.toast = this.toastController.dismiss();
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _main_services_service__WEBPACK_IMPORTED_MODULE_4__["MainServicesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _main_services_service__WEBPACK_IMPORTED_MODULE_4__["MainServicesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], LoginPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let MainServicesService = class MainServicesService {
    constructor(http) {
        this.http = http;
    }
    getChatId() {
        if (!this.chat_id) {
            this.chat_id = sessionStorage.getItem('chat_id');
        }
        return this.chat_id;
    }
    setChatId(chat_id) {
        sessionStorage.setItem('chat_id', chat_id);
        this.chat_id = chat_id;
    }
    getUserId() {
        if (!this.user_id) {
            this.user_id = sessionStorage.getItem('user_id');
        }
        return this.user_id;
    }
    setUserId(user_id) {
        sessionStorage.setItem('user_id', user_id);
        this.user_id = user_id;
    }
    getIpClient() {
        return this.ip_client;
    }
    setIpClient(ip) {
        this.ip_client = ip;
    }
    getSessionId() {
        if (sessionStorage.getItem('session_id')) {
            this.session_id = sessionStorage.getItem('session_id');
        }
        return this.session_id;
    }
    setSessionId(session_id) {
        sessionStorage.setItem('session_id', session_id);
        this.session_id = session_id;
    }
    getCookie(name) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    }
    getFileURL(url) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].STATIC_URL + '/files/' + url;
    }
    service(url, data) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('token', token);
        for (let field of Object.keys(data)) {
            formData.append(field, data[field]);
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + url, { 'token': token }, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    requestSecure(url, formData = {}) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `token ${this.getSessionId()}`
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    getBrands() {
        const token = localStorage.getItem('token');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/brands/?token=' + token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    getBrandById(id_brand) {
        const token = localStorage.getItem('token');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/brands/' + id_brand + '/?token=' + token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    getProductsByBrand(id_brand) {
        const token = localStorage.getItem('token');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/productbybrand/?search=' + id_brand + '&token=' + token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    getProduct(id_product) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/product/?search=' + id_product)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    getDetailMarkerProduct(id_marker) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/markerproduct/?search=' + id_marker)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    getCategoriesBrand() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/categories_brand/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    loginToken(token, user_name) {
        // this.headers = new HttpHeaders({
        //   'Content-Type': 'application/json',
        //   'Accept': 'application/json',
        //   'X-CSRFToken': this.getCookie('csrftoken')
        // })
        console.log(this.getCookie('csrftoken'));
        localStorage.setItem('token', token);
        localStorage.setItem('user_name', user_name);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/login_app/', { 'token': token, 'user_name': user_name })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    logOut() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/logout/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    setTokentChat(token_chat) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRFToken': this.getCookie('csrftoken')
        });
        const token = localStorage.getItem('token');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/token_chat/', { 'token_chat': token_chat, 'token': token })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    getChat(token_chat) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SoketIoConfig.url + '/chat_all/' + token_chat)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
};
MainServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MainServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MainServicesService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map