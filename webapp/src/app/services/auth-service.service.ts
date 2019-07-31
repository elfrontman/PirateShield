import { Injectable } from '@angular/core';
import { User } from './../structs/user';


@Injectable({
  providedIn: 'root'
})

const USERS = [
  new User(1, 'elfrontman', '123', 'ADMIN'),
  new User(2, 'adidas', '123', 'BRAND')
]

export class AuthServiceService {

  constructor() { }
}
