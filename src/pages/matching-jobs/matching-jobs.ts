import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-matching',
  templateUrl: 'matching-jobs.html'
})
export class MatchingPage {
  dashboardPage = DashboardPage;
  homePage      = HomePage;

  constructor(public navCtrl: NavController) {
    
  }

}