import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReturnUserPage } from '../return-user/return-user';
import { SignUpPage } from '../sign-up/sign-up';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  returnUser = ReturnUserPage;
  signupPage = SignUpPage;

  constructor(public navCtrl: NavController) {
    
  }

  launchReturnUser(){
    this.navCtrl.setRoot(ReturnUserPage);
  }


  launchSignUp(){
    this.navCtrl.push(SignUpPage);
  }

}