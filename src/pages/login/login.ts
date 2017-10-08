import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  dashboardPage = DashboardPage;
  homePage      = HomePage;

  constructor(public navCtrl: NavController) {
    
  }

  launchPage(){
    console.log("hlello");
    this.navCtrl.setRoot(DashboardPage);
  }

}