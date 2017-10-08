import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';
import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-history',
  templateUrl: 'job-history.html'
})
export class HistoryPage {
  dashboardPage = DashboardPage;
  homePage      = HomePage;

  constructor(private modalCtrl: ModalController) {
    
  }

  openModal(){
    
      let myModal = this.modalCtrl.create(ModalPage);
      myModal.present();
    }

}