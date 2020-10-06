import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


import {map} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {

  headers;
  ip_client;
  session_id;
  chat_id;
  user_id;
  unReadMessages = new Subject<number>();
  unReadMessages$ = this.unReadMessages.asObservable();

  constructor(private http: HttpClient) { 
    
    this.unReadMessages.next(Number(localStorage.getItem('unReadMessages')));
  }

  getUnReadMessages() {
    return this.unReadMessages;
  }

  setUnReadMessages(value) {
    console.log(value);
    this.unReadMessages.next(Number(value));
    localStorage.setItem('unReadMessages', value.toString());
  }

  getChatId(){
    if(!this.chat_id){
      this.chat_id = sessionStorage.getItem('chat_id');
    }
    return this.chat_id;
  }

  setChatId(chat_id){
    sessionStorage.setItem('chat_id', chat_id);
    this.chat_id = chat_id
  }

  getUserId(){
    if(!this.user_id){
      this.user_id = sessionStorage.getItem('user_id');
    }
    return this.user_id;
  }

  setUserId(user_id){
    sessionStorage.setItem('user_id', user_id);
    this.user_id = user_id
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
    return this.http.get(environment.API_URL + '/product/?search=' + id_product)  
    .pipe( map(response => response) )  
  }

  getDetailMarkerProduct(id_marker){
    return this.http.get(environment.API_URL + '/markerproduct/?search=' + id_marker)  
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
    return this.http.get(environment.SoketIoConfig.url + '/chat_all/'+token_chat)  
    .pipe( map(response => response) )
  }
}
