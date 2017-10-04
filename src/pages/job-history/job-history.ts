import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-history',
  templateUrl: 'job-history.html'
})
export class HistoryPage {
  dashboardPage = DashboardPage;
  homePage      = HomePage;

  constructor(public navCtrl: NavController) {
    
  }

}