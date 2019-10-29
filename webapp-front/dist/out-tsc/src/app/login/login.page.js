import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MainServicesService } from './../main-services.service';
let LoginPage = class LoginPage {
    constructor(router, mS, toastController) {
        this.router = router;
        this.mS = mS;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    login() {
        this.mS.loginToken(this.token)
            .subscribe((data) => {
            if (!data.error) {
                this.router.navigateByUrl('/brands');
                return;
            }
        }, (error) => {
            this.showToast("");
        });
    }
    showToast(message) {
        console.log('la tost');
        this.toast = this.toastController.create({
            message: 'Token invalido',
            duration: 6000,
            showCloseButton: true,
            closeButtonText: 'Cerrar',
            animated: true,
            cssClass: "error-toast"
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    HideToast() {
        this.toast = this.toastController.dismiss();
    }
};
LoginPage = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    __metadata("design:paramtypes", [Router, MainServicesService, ToastController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map