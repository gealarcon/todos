import { Injectable } from '@angular/core';
import { format } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 isLoggedIn = false

  constructor() { }

  doLogIn(form){
    if ( form.email === "user" && form.password === "password") {
      this.isLoggedIn = true
    } else { // put in angular alert

    }
  }


}
