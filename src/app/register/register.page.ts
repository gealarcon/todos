import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form = {
    name: null,
    email: null,
    password: null
  }
  
  constructor() { }

  ngOnInit() {
  }

  register(){
    alert('Sucessuflly Register /n' + 
    'Welcome' + `${this.form.email}`)
  }

}
