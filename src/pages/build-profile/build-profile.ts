import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';


@IonicPage()
@Component({
  selector: 'page-build-profile',
  templateUrl: 'build-profile.html',
})
export class BuildProfilePage {
  dashboardPage    = DashboardPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildProfilePage');
  }

  launchDashboardPage(){
    this.navCtrl.setRoot(DashboardPage);
  }

}
