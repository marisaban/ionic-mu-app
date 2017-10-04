import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  dashboardPage = DashboardPage;

  constructor(public navCtrl: NavController) {

  }

}