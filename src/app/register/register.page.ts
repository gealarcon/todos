import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form = {
    firstName: null,
    lastName: null,
    email: null,
    birthday: null,
    password: null,
    passwordVerify: null

  }
  
  constructor() { }

  ngOnInit() {
  }

  register(){
    if( this.form.password === this.form.passwordVerify
      && this.form.password != null && this.form.password != null){

      alert('Successfully Register ' + 
      'Welcome ' + `${this.form.firstName}`)
    }
    
    else{
      alert('Passwords did not match' + `${this.form.birthday}`)
      this.form.password  = null;
      this.form.passwordVerify = null;
      console.log(this.form.birthday)
    }
    
  }

}
