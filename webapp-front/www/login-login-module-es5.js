(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<div class=\"content-login\">\n\t\t<img class=\"image-logo\" src=\"assets/images/logo.svg\"/>\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\">Token</ion-label>\n\t\t\t<ion-input [(ngModel)]=\"token\" #tokeninput autofocus=\"true\" readonly></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-button shape=\"round\" expand=\"full\" (click)=\"login()\">\n\t\t\tEntrar\n\t\t\t<img src=\"./assets/images/arrow_login.svg\" class=\"icon-svg\">\n\t\t</ion-button>\n\t</div>\n\t\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-login {\n  width: 100%;\n  max-width: 320px;\n  padding: 1rem 3rem;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  -webkit-transform: translate(50%, 45%);\n          transform: translate(50%, 45%);\n}\n\n.image-logo {\n  max-width: 70%;\n  margin: 0 auto 2rem;\n  display: block;\n}\n\n.icon-svg {\n  height: 16px;\n  position: absolute;\n  right: 18px;\n}\n\nion-item {\n  margin-bottom: 3rem;\n}\n\nion-button {\n  position: relative;\n  height: 50px;\n  font-weight: bold;\n}\n\nion-button ion-icon {\n  position: absolute;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2RqYW5nby9BZ2F0aGFEZW1vL1BpcmF0ZVNoaWVsZC93ZWJhcHAtZnJvbnQvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDRyxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURFQTtFQUNDLGNBQUE7RUFDRyxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNDLFlBQUE7RUFDRyxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNDLG1CQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1sb2dpbntcblx0d2lkdGg6IDEwMCU7XG5cdG1heC13aWR0aDogMzIwcHg7XG5cdHBhZGRpbmc6IDFyZW0gM3JlbTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA0NSUpO1xufVxuXG4uaW1hZ2UtbG9nb3tcblx0bWF4LXdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAwIGF1dG8gMnJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmljb24tc3Zne1xuXHRoZWlnaHQ6IDE2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxOHB4O1xufVxuXG5pb24taXRlbXtcblx0bWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuaW9uLWJ1dHRvbntcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRoZWlnaHQ6IDUwcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tYnV0dG9uIGlvbi1pY29ue1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAxcmVtO1xufSIsIi5jb250ZW50LWxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA0NSUpO1xufVxuXG4uaW1hZ2UtbG9nbyB7XG4gIG1heC13aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0byAycmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmljb24tc3ZnIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxOHB4O1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbmlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1idXR0b24gaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../main-services.service */ "./src/app/main-services.service.ts");





var LoginPage = /** @class */ (function () {
    function LoginPage(router, mS, toastController) {
        this.router = router;
        this.mS = mS;
        this.toastController = toastController;
        this.token = 'kAJXc4';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.mS.loginToken(this.token)
            .subscribe(function (data) {
            if (!data.error) {
                _this.router.navigateByUrl('/terminos');
                return;
            }
        });
    };
    LoginPage.prototype.showToast = function (message) {
        console.log('la tost');
        this.toast = this.toastController.create({
            message: 'Token invalido',
            duration: 6000,
            showCloseButton: true,
            closeButtonText: 'Cerrar',
            animated: true,
            cssClass: "error-toast"
        }).then(function (toastData) {
            console.log(toastData);
            toastData.present();
        });
    };
    LoginPage.prototype.HideToast = function () {
        this.toast = this.toastController.dismiss();
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _main_services_service__WEBPACK_IMPORTED_MODULE_4__["MainServicesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _main_services_service__WEBPACK_IMPORTED_MODULE_4__["MainServicesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map