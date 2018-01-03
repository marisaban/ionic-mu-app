import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController } from 'ionic-angular';
// import { Http } from '@angular/http';

// import { TranslateService } from '@ngx-translate/core';
import { DataFinder } from '../../providers/datafinder';
// import { ItemApi } from '../../providers/item-api';

import { JobDetailsPage } from '../job-details/job-details';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  offers = [];
  jobDetalsPage = JobDetailsPage;

  constructor(private viewCtrl: ViewController, public navCtrl: NavController, private dataFinder: DataFinder) {
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("testData.json").then(data => {
      this.SetQueryOptionsData(data);
    });
  }

  /* Sets data with returned JSON array */
  SetQueryOptionsData(data : any) {
    this.offers = data.offers;
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  showDetails(){
    console.log("show");
  }

  openJobDescription(){
    this.navCtrl.setRoot(JobDetailsPage);
  }

}
