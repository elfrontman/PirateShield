import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
let FooterComponent = class FooterComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    goBack() {
        this.location.back();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "backRoute", void 0);
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.scss'],
    }),
    __metadata("design:paramtypes", [Location])
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map