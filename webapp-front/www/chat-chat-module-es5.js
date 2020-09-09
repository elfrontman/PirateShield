(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal-image\n  *ngIf=\"modalImage\"\n  [image]=\"imageSelected\"\n  (close)=\"modalImage=false; imageSelected=null\"\n  ></app-modal-image>\n<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-grid>\n\t\t\t<ion-row align-items-center>\n\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t<ion-buttons routerLink=\"/brands\">\n\t\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t\t<img class=\"icon-svg\" src=\"./assets/images/back.svg\">\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-buttons>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t<ion-title>CHAT</ion-title>\t\t\t\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content #chatview>\n\t\n\t<ion-grid>\n    \n    <ion-row *ngFor=\"let message of messages\">\n \n      <ion-col size=\"9\"  [ngClass]=\"message.sender != tokenUser ? 'my-message' : 'other-message'\" class=\"message\" [attr.offset] = \"message.sender == tokenUser ? '' : 3\">\n      \t\n        <div class=\"username\" text-right>{{ message.user_name }}</div>\n\n      \t<div [ngSwitch]=\"message.type\">\n      \t\t<span *ngSwitchCase=\"'text'\">{{ message.message }}</span>\t\n      \t\t<img *ngSwitchCase=\"'image'\" [src]=\"message.message\" (click)=\"showImage(message.message)\"/>\n      \t</div>\n        \n        <div class=\"time\" text-right>{{ message.createdAt | date:'short' }}</div>\n      </ion-col>\n \n    </ion-row>\n  </ion-grid>\n\t\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row align-items-center>\n      <ion-col size=\"8\">\n        <ion-textarea auto-grow class=\"message-input\" rows=\"1\" [(ngModel)]=\"message\"></ion-textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" class=\"msg-btn\"\n          (click)=\"filechooser.click()\">\n          <ion-icon name=\"ios-camera\" slot=\"icon-only\"></ion-icon>\n          <input type=\"file\" #filechooser capture=\"camera\" hidden (change)=\"sendImageMessage(filechooser)\"/>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"message === ''\" class=\"msg-btn\"\n          (click)=\"sendMessage()\">\n          <ion-icon name=\"ios-send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/modal-image/modal-image.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/modal-image/modal-image.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-image\">\n  <a class=\"close\" (click)=\"closeView()\"><ion-icon name=\"md-close\" ></ion-icon></a>\n  <img [src]=\"image\" alt=\"\">\n</div>"

/***/ }),

/***/ "./src/app/chat/CompressImage.ts":
/*!***************************************!*\
  !*** ./src/app/chat/CompressImage.ts ***!
  \***************************************/
/*! exports provided: CompressImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompressImage", function() { return CompressImage; });
var CompressImage = /** @class */ (function () {
    function CompressImage(file, max_size, prefix_name) {
        this.file = file;
        this.MAX_IMAGE_SIZE_PROCESS = max_size;
        this.type = this.file.type;
        this.name = prefix_name + '_' + this.file.name;
        this.reader = new FileReader();
    }
    CompressImage.prototype.getImage = function () {
        var _self = this;
        return new Promise(function (resolve, reject) {
            _self.reader.onloadend = _self.loadEndReader.bind(_self, resolve, reject);
            _self.reader.readAsDataURL(_self.file);
        });
    };
    ;
    CompressImage.prototype.base64ToArrayBuffer = function (base64) {
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binaryString = atob(base64);
        var len = binaryString.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    };
    CompressImage.prototype.loadEndReader = function (resolve, reject) {
        var tmpImage = new Image(), _self = this;
        tmpImage.onload = function () {
            var _img = this;
            var MAX_WIDTH = _self.MAX_IMAGE_SIZE_PROCESS, MAX_HEIGHT = _self.MAX_IMAGE_SIZE_PROCESS, tmpWidth = tmpImage.width, tmpHeight = tmpImage.height;
            if (tmpWidth > tmpHeight) {
                if (tmpWidth > MAX_WIDTH) {
                    tmpHeight *= MAX_WIDTH / tmpWidth;
                    tmpWidth = MAX_WIDTH;
                }
            }
            else {
                if (tmpHeight > MAX_HEIGHT) {
                    tmpWidth *= MAX_HEIGHT / tmpHeight;
                    tmpHeight = MAX_HEIGHT;
                }
            }
            var resizeCanvas = document.createElement('canvas');
            resizeCanvas.width = tmpWidth;
            resizeCanvas.height = tmpHeight;
            var ctx = resizeCanvas.getContext('2d');
            ctx.drawImage(_img, 0, 0, resizeCanvas.width, resizeCanvas.height);
            var dataURL = resizeCanvas.toDataURL(_self.type);
            var file = _self.dataURLtoBlob(dataURL);
            resolve(file);
        };
        tmpImage.onerror = function (err) {
            reject(err);
        };
        tmpImage.src = this.reader.result;
    };
    CompressImage.prototype.dataURLtoBlob = function (dataURL) {
        var binary = atob(dataURL.split(',')[1]);
        var array = [], length = binary.length;
        for (var i = 0; i < length; i++) {
            array.push(binary.charCodeAt(i));
        }
        var blob = new Blob([new Uint8Array(array)], { type: this.type });
        return new File([blob], this.name, { type: this.type, lastModified: blob['lastModifiedDate'] });
    };
    CompressImage.ctorParameters = function () { return [
        { type: File },
        { type: Number },
        { type: String }
    ]; };
    return CompressImage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");
/* harmony import */ var _modal_image_modal_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-image/modal-image.component */ "./src/app/chat/modal-image/modal-image.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");










var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["SocketIoModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SoketIoConfig)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"], _modal_image_modal_image_component__WEBPACK_IMPORTED_MODULE_7__["ModalImageComponent"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: #3880ff;\n  color: #fff;\n}\n\n.other-message {\n  background: #e3e3e3;\n  color: #333;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.username {\n  display: block;\n  text-align: left !important;\n  font-weight: bold;\n  font-style: italic;\n  color: white;\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n}\n\n.other-message .time, .other-message .username {\n  color: #333;\n}\n\n.message-input {\n  margin-top: 0px;\n  background: #fff;\n  min-height: 40px;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\n.icon-svg {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FESUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICMzODgwZmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiAjZGZkZmRmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi51c2VybmFtZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ub3RoZXItbWVzc2FnZSAudGltZSwgLm90aGVyLW1lc3NhZ2UgLnVzZXJuYW1le1xuICBjb2xvcjogIzMzMztcbn1cblxuXG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4ubXNnLWJ0biB7XG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xufVxuXG4uaWNvbi1zdmd7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4iLCIubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICMzODgwZmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiAjZGZkZmRmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi51c2VybmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLm90aGVyLW1lc3NhZ2UgLnRpbWUsIC5vdGhlci1tZXNzYWdlIC51c2VybmFtZSB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLm1zZy1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcbn1cblxuLmljb24tc3ZnIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _main_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-services.service */ "./src/app/main-services.service.ts");
/* harmony import */ var _CompressImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompressImage */ "./src/app/chat/CompressImage.ts");





var ChatPage = /** @class */ (function () {
    function ChatPage(socket, service) {
        this.socket = socket;
        this.service = service;
        this.message = '';
        this.messages = [];
        this.tokenUser = '';
        this.modalImage = false;
    }
    ChatPage.prototype.ngAfterViewChecked = function () {
        //this.scrollBottom();
    };
    ChatPage.prototype.showImage = function (image) {
        this.imageSelected = image;
        this.modalImage = true;
    };
    ChatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.username = localStorage.getItem('user_name');
        this.socket.connect();
        this.socket.fromEvent('chat-token').subscribe(function (token) {
            _this.tokenUser = _this.service.getUserId();
            _this.tokenOP = localStorage.getItem('token');
            _this.socket.emit('create', _this.tokenUser);
            _this.service.getChat(_this.tokenUser)
                .subscribe(function (data) {
                console.log(data);
                _this.messages = data;
                _this.scrollBottom();
            });
        });
        this.socket.fromEvent('received').subscribe(function (message) {
            _this.messages.push(message);
            _this.scrollBottom();
        });
    };
    ChatPage.prototype.sendMessage = function () {
        var msg = {
            message: this.message,
            sender: Number(this.service.getUserId()),
            receiver: 1,
            type: "text",
            user_sender: this.username,
            user_receiver: "Admin",
            chat_id: this.tokenUser,
            operativo: this.tokenOP,
            createdAt: new Date()
        };
        console.log(msg);
        this.socket.emit('send-message', msg);
        this.messages.push(msg);
        this.message = '';
        this.scrollBottom();
    };
    ChatPage.prototype.sendImageMessage = function (file_input) {
        var _this = this;
        var compress = new _CompressImage__WEBPACK_IMPORTED_MODULE_4__["CompressImage"](file_input.files[0], 1024, null);
        compress.getImage().then(function (f) {
            var reader = new FileReader();
            reader.onloadend = function (e) {
                var msg = {
                    message: reader.result,
                    sender: Number(_this.service.getUserId()),
                    receiver: 1,
                    type: 'image',
                    user_sender: _this.username,
                    user_receiver: "Admin",
                    chat_id: _this.tokenUser,
                    operativo: _this.tokenOP,
                    createdAt: new Date()
                };
                _this.socket.emit('send-message', msg);
                _this.messages.push(msg);
                _this.scrollBottom();
            };
            reader.readAsDataURL(f);
        });
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    ChatPage.prototype.scrollBottom = function () {
        var _this = this;
        try {
            setTimeout(function (_) {
                _this.chatview.el.scrollToBottom(0);
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatPage.ctorParameters = function () { return [
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] },
        { type: _main_services_service__WEBPACK_IMPORTED_MODULE_3__["MainServicesService"] }
    ]; };
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
    return ChatPage;
}());



/***/ }),

/***/ "./src/app/chat/modal-image/modal-image.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/chat/modal-image/modal-image.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-image {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 999;\n  background: #272727;\n}\n.modal-image .close {\n  color: white;\n  font-size: 4rem;\n  position: absolute;\n  right: 20px;\n  z-index: 2;\n}\n.modal-image img {\n  height: 100%;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  -webkit-transform: translate(50%, 50%);\n          transform: translate(50%, 50%);\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvUGlyYXRlU2hpZWxkL3dlYmFwcC1mcm9udC9zcmMvYXBwL2NoYXQvbW9kYWwtaW1hZ2UvbW9kYWwtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQvbW9kYWwtaW1hZ2UvbW9kYWwtaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDUjtBREVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvbW9kYWwtaW1hZ2UvbW9kYWwtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaW1hZ2V7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcblxuICAgIC5jbG9zZXtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgYm90dG9tOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxufSIsIi5tb2RhbC1pbWFnZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6ICMyNzI3Mjc7XG59XG4ubW9kYWwtaW1hZ2UgLmNsb3NlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG59XG4ubW9kYWwtaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/modal-image/modal-image.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/modal-image/modal-image.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalImageComponent", function() { return ModalImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalImageComponent = /** @class */ (function () {
    function ModalImageComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ModalImageComponent.prototype.closeView = function () {
        this.close.emit(true);
    };
    ModalImageComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalImageComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalImageComponent.prototype, "close", void 0);
    ModalImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-image',
            template: __webpack_require__(/*! raw-loader!./modal-image.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/modal-image/modal-image.component.html"),
            styles: [__webpack_require__(/*! ./modal-image.component.scss */ "./src/app/chat/modal-image/modal-image.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalImageComponent);
    return ModalImageComponent;
}());



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



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es5.js.map