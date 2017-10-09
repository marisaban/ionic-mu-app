import { Component, ViewChild } from '@angular/core';
import { Nav, ViewController, NavController } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import { MatchingPage } from '../../pages/matching-jobs/matching-jobs';
import { HistoryPage } from '../../pages/job-history/job-history';
import { WorkPage } from '../../pages/work-logs/work-logs';

@Component({
  selector: 'sub-nav',
  templateUrl: 'sub-nav.html'
})
export class SubNavComponent {
  @ViewChild(Nav) nav: Nav;

  text: string;
  pages: Array<{title: string, component: any}>;
  

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {

    // this.text = this.viewCtrl.name;
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Matching Jobs', component: MatchingPage},
      { title: 'Job History', component: HistoryPage},
      { title: 'Work Logs', component: WorkPage},
      { title: 'Logout', component: LoginPage}
    ];

  }

  onNext(page){
    this.navCtrl.push(page.component);
  }


}

