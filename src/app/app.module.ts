import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MatchingPage } from '../pages/matching-jobs/matching-jobs';
import { HistoryPage } from '../pages/job-history/job-history';
import { WorkPage } from '../pages/work-logs/work-logs';
import { ModalPage } from '../pages/modal/modal';

//custom component
import { SubNavComponent } from '../components/sub-nav/sub-nav';
import { ExpandableComponent } from '../components/expandable/expandable';
import { BottomToolbarComponent } from '../components/bottom-toolbar/bottom-toolbar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DashboardPage,
    MatchingPage,
    HistoryPage,
    WorkPage,
    ModalPage,
    SubNavComponent,
    ExpandableComponent,
    BottomToolbarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DashboardPage,
    MatchingPage,
    HistoryPage,
    WorkPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
