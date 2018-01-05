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

  items: any = [];

  constructor(private modalCtrl: ModalController, public navCtrl: NavController) {   

    this.items = [
      { title: 'item1' },
      { title: 'item2' },
      { title: 'item3' },
      { title: 'item4' }
    ]
  }

  removeItem(item){
 
    for(let i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
 
    }
 
  }

  openModal(){
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }

  clickJobDetailsPage(){
    this.navCtrl.setRoot(JobDetailsPage);
  }

}