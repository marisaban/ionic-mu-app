import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EmailSignupPage } from '../email-signup/email-signup';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  loginPage = LoginPage;
  emailSignUpPage = EmailSignupPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  launchPage(){
    this.navCtrl.push(LoginPage);
  }

  launchEmailSignUp(){
    this.navCtrl.push(EmailSignupPage);
  }

  goBack(){
    this.navCtrl.pop();
  }

}

