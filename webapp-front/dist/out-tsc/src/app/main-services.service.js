import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
let MainServicesService = class MainServicesService {
    constructor(http) {
        this.http = http;
    }
    service(url, data) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('token', token);
        for (let field of Object.keys(data)) {
            formData.append(field, data[field]);
        }
        return this.http.post(environment.API_URL + url, { 'token': token }, { headers: this.headers })
            .pipe(map(response => response));
    }
    getBrands() {
        const token = localStorage.getItem('token');
        return this.http.get(environment.API_URL + '/brands/?token=' + token)
            .pipe(map(response => response));
    }
    getBrandById(id_brand) {
        const token = localStorage.getItem('token');
        return this.http.get(environment.API_URL + '/brands/' + id_brand + '/?token=' + token)
            .pipe(map(response => response));
    }
    getProductsByBrand(id_brand) {
        const token = localStorage.getItem('token');
        return this.http.get(environment.API_URL + '/productbybrand/?search=' + id_brand + '&token=' + token)
            .pipe(map(response => response));
    }
    getProduct(id_product) {
        return this.http.get(environment.API_URL + '/product/' + id_product)
            .pipe(map(response => response));
    }
    getDetailMarkerProduct(id_marker) {
        return this.http.get(environment.API_URL + '/markerproduct/' + id_marker)
            .pipe(map(response => response));
    }
    loginToken(token) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        const formData = new FormData();
        formData.append('token', token);
        localStorage.setItem('token', token);
        return this.http.post(environment.API_URL + '/login_app/', { 'token': token }, { headers: this.headers })
            .pipe(map(response => response));
    }
};
MainServicesService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], MainServicesService);
export { MainServicesService };
//# sourceMappingURL=main-services.service.js.map