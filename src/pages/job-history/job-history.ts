import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { JobDetailsPage } from '../job-details/job-details';
import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-history',
  templateUrl: 'job-history.html'
})
export class HistoryPage {
  dashboardPage = DashboardPage;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController) {   

  }

  openModal(){
    this.navCtrl.push(ModalPage);
  }

  clickJobDetailsPage(){
    this.navCtrl.push(JobDetailsPage);
  }

}