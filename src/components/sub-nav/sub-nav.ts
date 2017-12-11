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

// sub navigation component = side menu
export class SubNavComponent {
  @ViewChild(Nav) nav: Nav;

  text: string;
  prevPage: string;
  nextPage: string;
  currentPage: string;
  pages: Array<{title: string, component: any}>;
  

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {

    this.pages = [
      { title: 'My Jobs', component: DashboardPage },
      { title: 'Matching Jobs', component: MatchingPage},
      { title: 'Job History', component: HistoryPage},
      { title: 'Work Logs', component: WorkPage},
      { title: 'Logout', component: LoginPage}
    ];

  }

 ngOnInit(page){
  this.prevPage = this.pages[1].title;
  this.nextPage = this.pages[2].title;
  this.currentPage = this.pages[0].title;
 }

 onPrev(page){
   this.navCtrl.push(this.pages[1].component);
 }

  onNext(page){
    this.navCtrl.push(this.pages[2].component);
  }


}

