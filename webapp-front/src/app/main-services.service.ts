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

  getFileURL(url){
    return environment.STATIC_URL + '/files/' + url
  }

  service(url, data){
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })

    const token = localStorage.getItem('token');
    const formData = new FormData()
    formData.append('token', token);

    for(let field of Object.keys(data)){
      formData.append(field, data[field]);
    }


    return this.http.post(environment.API_URL + url, {'token': token}, {headers: this.headers})
      .pipe(map(response => response))
  }

  getBrands(){
    const token = localStorage.getItem('token');

  	return this.http.get(environment.API_URL + '/brands/?token='+token)	
  		.pipe( map(response => response) )
  }

  getBrandById(id_brand){
    const token = localStorage.getItem('token');

  	return this.http.get(environment.API_URL + '/brands/' + id_brand +'/?token='+token)	
  		.pipe( map(response => response) )	
  }

  getProductsByBrand(id_brand){
    const token = localStorage.getItem('token');

  	return this.http.get(environment.API_URL + '/productbybrand/?search=' + id_brand+'&token='+token)	
  		.pipe( map(response => response) )	
  }

  getProduct(id_product){
    return this.http.get(environment.API_URL + '/product/' + id_product)  
      .pipe( map(response => response) )  
  }

  getDetailMarkerProduct(id_marker){
    return this.http.get(environment.API_URL + '/markerproduct/' + id_marker)  
      .pipe( map(response => response) )  
  }


  loginToken(token){
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })

    const formData = new FormData()
    formData.append('token', token);

    localStorage.setItem('token', token);
  
    return this.http.post(environment.API_URL + '/login_app/', {'token': token}, {headers: this.headers})
      .pipe(map(response => response))
  }

  setTokentChat(token_chat){
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })

    const token = localStorage.getItem('token')
    
  
    return this.http.post(environment.API_URL + '/token_chat/', {'token_chat': token_chat, 'token': token}, {headers: this.headers})
      .pipe(map(response => response))

  }

  getChat(token_chat){
    const token = localStorage.getItem('token_chat');

    return this.http.get(environment.SoketIoConfig.url + '/chat/'+token)  
      .pipe( map(response => response) )
  }
}
