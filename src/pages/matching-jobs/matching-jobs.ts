import { Component, ViewChild } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-matching',
  templateUrl: 'matching-jobs.html'
})
export class MatchingPage {
  dashboardPage = DashboardPage;


  constructor(private modalCtrl: ModalController) {
    
  }

  openModal(){
    
      let myModal = this.modalCtrl.create(ModalPage);
      myModal.present();
    }


}