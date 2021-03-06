import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MatchingPage } from '../pages/matching-jobs/matching-jobs';
import { HistoryPage } from '../pages/job-history/job-history';
import { WorkPage } from '../pages/work-logs/work-logs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Matching Jobs', component: MatchingPage},
      { title: 'Job History', component: HistoryPage},
      { title: 'Work Logs', component: WorkPage},
      { title: 'Logout', component: LoginPage}
    ];

  }

  openPage(page) {
   let thePage = page.component;
   if(thePage === DashboardPage){
     this.nav.setRoot(DashboardPage);
   }else {
    this.nav.push(thePage);
   }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
