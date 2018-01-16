import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { ModalPage } from '../modal/modal';
import { JobDetailsPage } from '../job-details/job-details';

@Component({
  selector: 'page-matching',
  templateUrl: 'matching-jobs.html'
})
export class MatchingPage {
  dashboardPage = DashboardPage;
  jobDetailsPage = JobDetailsPage;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController) {
    
  }

  openModal(){
    
      let myModal = this.modalCtrl.create(ModalPage);
      myModal.present();
    }

  clickJobDetailsPage(){
    this.navCtrl.push(JobDetailsPage);
  }


}