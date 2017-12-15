import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { SignUpPage } from '../sign-up/sign-up';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  dashboardPage = DashboardPage;
  signupPage = SignUpPage;

  constructor(public navCtrl: NavController) {
    
  }

  launchPage(){
    this.navCtrl.setRoot(DashboardPage);
  }

  launchSignUp(){
    this.navCtrl.setRoot(SignUpPage);
  }

}