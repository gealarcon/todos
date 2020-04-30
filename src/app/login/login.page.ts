import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../user.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = {
    email: null,
    password: null,
  };

  constructor(private router: Router, private _userService: UserService) { }

  ngOnInit() {
  }

  login() {
    console.log("this.form:", this.form)
    this._userService.doLogIn(this.form)
    this.router.navigate(['/list'])
  }

}
