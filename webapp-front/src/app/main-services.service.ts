import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {

  headers;
  ip_client;
  session_id;

  constructor(private http: HttpClient) { 

  }

  getIpClient(){
    return this.ip_client;
  }

  setIpClient(ip){
    this.ip_client = ip;
  }

  getSessionId(){
    if(sessionStorage.getItem('session_id')){
      this.session_id = sessionStorage.getItem('session_id');
    }

    return this.session_id;
  }

  setSessionId(session_id){
    sessionStorage.setItem('session_id', session_id)
    this.session_id = session_id;
  }

  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) 
      return parts.pop().split(";").shift();
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

  requestSecure(url, formData = {}){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `token ${this.getSessionId()}`
    })

    return this.http.get(environment.API_URL + url, {headers: headers}).pipe( map(response => response) )   
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

  getCategoriesBrand(){
    return this.http.get(environment.API_URL + '/categories_brand/')  
    .pipe( map(response => response) )  
  }


  loginToken(token, user_name){
    // this.headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'X-CSRFToken': this.getCookie('csrftoken')

    // })

    console.log(this.getCookie('csrftoken'))

    localStorage.setItem('token', token);
    localStorage.setItem('user_name', user_name);

    return this.http.post(environment.API_URL + '/login_app/', {'token': token, 'user_name': user_name})
    .pipe(map(response => response))
  }


  logOut(){
    return this.http.get(environment.API_URL + '/logout/')  
    .pipe( map(response => response) )  
  }

  setTokentChat(token_chat){
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRFToken': this.getCookie('csrftoken')
    })

    const token = localStorage.getItem('token')
    

    return this.http.post(environment.API_URL + '/token_chat/', {'token_chat': token_chat, 'token': token})
    .pipe(map(response => response))

  }

  getChat(token_chat){
    const token = localStorage.getItem('token_chat');

    return this.http.get(environment.SoketIoConfig.url + '/chat/'+token)  
    .pipe( map(response => response) )
  }
}
