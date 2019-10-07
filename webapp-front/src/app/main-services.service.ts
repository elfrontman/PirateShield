import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {

  headers;

  constructor(private http: HttpClient) { 

  }

  getBrands(){
  	return this.http.get(environment.API_URL + '/brands')	
  		.pipe( map(response => response) )
  }

  getBrandById(id_brand){
  	return this.http.get(environment.API_URL + '/brands/' + id_brand)	
  		.pipe( map(response => response) )	
  }

  getProductsByBrand(id_brand){
  	return this.http.get(environment.API_URL + '/productbybrand/?search=' + id_brand)	
  		.pipe( map(response => response) )	
  }

  getProduct(id_product){
    return this.http.get(environment.API_URL + '/product/' + id_product)  
      .pipe( map(response => response) )  
  }

  getDetailMarkerProduct(id_product){
    return this.http.get(environment.API_URL + '/detailproduct/' + id_product)  
      .pipe( map(response => response) )  
  }


  loginToken(token){
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })

    const formData = new FormData()
    formData.append('token', token);


    return this.http.post(environment.API_URL + '/login_app/', {'token': token}, {headers: this.headers})
      .pipe(map(response => response))
  }
}
