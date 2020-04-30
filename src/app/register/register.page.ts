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

  updateBirthdate($event) {
    
    let date = ''
    for (let i = 0; i < 10; i++){
      date = date + $event[i];
    }

    this.form.birthday = date;
  }

  register(){
    if( this.form.password === this.form.passwordVerify
      && this.form.password != null && this.form.password != null){


      alert('Successfully Register ' + 
      'Welcome ' + `${this.form.firstName}`)
    }
    
    else{
      alert('Passwords did not match')
      var passwordField = document.getElementById('pw1');
      passwordField.style.setProperty('--placeholder-color', 'red')
      var verifyField = document.getElementById('pw2')
      verifyField.style.setProperty('--placeholder-color', 'red')

      console.log(passwordField);
      
      this.form.password  = null;
      this.form.passwordVerify = null;
    }
    
  }

}
