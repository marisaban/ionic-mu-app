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

  jobs: any = [];
  items: any = [];
  itemExpandHeight: number = 200;

  constructor(private modalCtrl: ModalController) {
    this.jobs = [
        { expanded: false },
        { expanded: false },
        { expanded: false },
        { expanded: false }
    ]

    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
  ]
  }

  expandJob(job){
    if(job.expanded === true){
      job.expanded = false;
    }else {
      job.expanded = true;
    }
    
  }

  expandItem(item){
    if(item.expanded === true){
      item.expanded = false;
    }else {
      item.expanded = true;
    }
    
  }

  openModal(){
    
      let myModal = this.modalCtrl.create(ModalPage);
      myModal.present();
    }

}