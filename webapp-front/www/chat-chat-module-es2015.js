(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-grid>\n\t\t\t<ion-row align-items-center>\n\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t<ion-buttons routerLink=\"/brands\">\n\t\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/back.svg\">\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-buttons>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t<ion-title>CHAT</ion-title>\t\t\t\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content #chatview>\n\t\n\t<ion-grid>\n    \n    <ion-row *ngFor=\"let message of messages\">\n \n      <ion-col size=\"9\"  [ngClass]=\"message.isAdmin ? 'other-message' : 'my-message'\" class=\"message\" [attr.offset] = \"message.isAdmin ? '' : 3\">\n      \t\n      \t<div [ngSwitch]=\"message.type\">\n      \t\t<span *ngSwitchCase=\"'String'\">{{ message.message }}</span>\t\n      \t\t<img *ngSwitchCase=\"'Image'\" [src]=\"message.message\"/>\n      \t</div>\n        \n        <div class=\"time\" text-right>{{ message.createdAt | date:'short' }}</div>\n      </ion-col>\n \n    </ion-row>\n  </ion-grid>\n\t\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row align-items-center>\n      <ion-col size=\"8\">\n        <ion-textarea auto-grow class=\"message-input\" rows=\"1\" [(ngModel)]=\"message\"></ion-textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" class=\"msg-btn\"\n          (click)=\"filechooser.click()\">\n          <ion-icon name=\"ios-camera\" slot=\"icon-only\"></ion-icon>\n          <input type=\"file\" #filechooser capture=\"camera\" hidden (change)=\"sendImageMessage(filechooser)\"/>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"message === ''\" class=\"msg-btn\"\n          (click)=\"sendMessage()\">\n          <ion-icon name=\"ios-send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");









const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
let ChatPageModule = class ChatPageModule {
};
ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["SocketIoModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SoketIoConfig)
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: #3880ff;\n  color: #fff;\n}\n\n.other-message {\n  background: #e3e3e3;\n  color: #333;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.other-message .time {\n  color: #333;\n}\n\n.message-input {\n  margin-top: 0px;\n  background: #fff;\n  min-height: 40px;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\n.icon-svg {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm90aGVyLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnRpbWUge1xuICBjb2xvcjogI2RmZGZkZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ub3RoZXItbWVzc2FnZSAudGltZXtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4ubXNnLWJ0biB7XG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xufVxuXG4uaWNvbi1zdmd7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4iLCIubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICMzODgwZmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiAjZGZkZmRmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5vdGhlci1tZXNzYWdlIC50aW1lIHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4ubXNnLWJ0biB7XG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xufVxuXG4uaWNvbi1zdmcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-services.service */ "./src/app/main-services.service.ts");




let ChatPage = class ChatPage {
    constructor(socket, service) {
        this.socket = socket;
        this.service = service;
        this.message = '';
        this.messages = [];
        this.tokenUser = '';
    }
    ngAfterViewChecked() {
        //this.scrollBottom();
    }
    ngOnInit() {
        this.socket.connect();
        console.log('init', this.socket);
        this.socket.fromEvent('chat-token').subscribe((token) => {
            console.log(token);
            this.service.setTokentChat(token.token)
                .subscribe((data) => {
                if (data.created) {
                    localStorage.setItem('token_chat', token.token);
                }
                else {
                    if (data.token)
                        localStorage.setItem('token_chat', data.token);
                }
                this.tokenUser = localStorage.getItem('token_chat');
                this.socket.emit('create', this.tokenUser);
                this.service.getChat(this.tokenUser)
                    .subscribe(data => {
                    console.log(data);
                    this.messages = data;
                    this.scrollBottom();
                });
            });
        });
        this.socket.fromEvent('received').subscribe(message => {
            this.messages.push(message);
            this.scrollBottom();
        });
    }
    sendMessage() {
        let msg = { message: this.message, token: this.tokenUser, type: 'String' };
        this.socket.emit('send-message', msg);
        this.messages.push(msg);
        this.message = '';
        this.scrollBottom();
    }
    sendImageMessage(file_input) {
        let reader = new FileReader();
        reader.onload = (evt) => {
            var msg = {
                token: this.tokenUser,
                message: evt.target.result,
                type: 'Image'
            };
            console.log(msg);
            this.socket.emit('send-file', msg);
            this.messages.push(msg);
        };
        console.log(file_input.files[0]);
        reader.readAsDataURL(file_input.files[0]);
        this.scrollBottom();
    }
    ionViewWillLeave() {
        this.socket.disconnect();
    }
    scrollBottom() {
        try {
            setTimeout(_ => {
                this.chatview.el.scrollToBottom(0);
            });
        }
        catch (err) {
            console.log(err);
        }
    }
};
ChatPage.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] },
    { type: _main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatview', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatPage.prototype, "chatview", void 0);
ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html"),
        styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"], _main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"]])
], ChatPage);



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map