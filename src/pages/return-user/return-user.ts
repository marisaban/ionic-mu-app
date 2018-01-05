import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-return-user',
  templateUrl: 'return-user.html',
})
export class ReturnUserPage {

  dashboardPage = DashboardPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  launchDashboard(){
    this.navCtrl.setRoot(DashboardPage);
  }

  goBack(){
    this.navCtrl.setRoot(LoginPage);
  }

}
