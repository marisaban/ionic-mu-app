import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuildProfilePage } from '../build-profile/build-profile'

@IonicPage()
@Component({
  selector: 'page-email-signup',
  templateUrl: 'email-signup.html',
})
export class EmailSignupPage {
  buildProfilePage = BuildProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailSignupPage');
  }

  launchPage(){
    this.navCtrl.push(BuildProfilePage);
  }

  goBack(){
    this.navCtrl.pop();
  }

}
