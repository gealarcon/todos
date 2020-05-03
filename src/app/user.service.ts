import { Injectable } from '@angular/core';
//import { Format } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 isLoggedIn = true

  constructor() { }

  doLogIn(form){
    console.log(form)
    if ( form.email === "user" && form.password === "password") {
      this.isLoggedIn = true
    } else { 
          return null;
    }
  }


}
