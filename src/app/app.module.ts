import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
// import { DatePicker} from '@ionic-native/datepicker';
import { HttpModule } from '@angular/http';

import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MatchingPage } from '../pages/matching-jobs/matching-jobs';
import { HistoryPage } from '../pages/job-history/job-history';
import { WorkPage } from '../pages/work-logs/work-logs';
import { ModalPage } from '../pages/modal/modal';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { EmailSignupPage } from '../pages/email-signup/email-signup';
import { BuildProfilePage } from '../pages/build-profile/build-profile'

//custom component
import { SubNavComponent } from '../components/sub-nav/sub-nav';
import { ExpandableComponent } from '../components/expandable/expandable';
import { BottomToolbarComponent } from '../components/bottom-toolbar/bottom-toolbar';
import { NewUserHeaderComponent } from '../components/new-user-header/new-user-header';

import { ReactiveFormsModule } from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataFinder } from '../providers/datafinder';
import { ItemApi } from '../providers/item-api';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DashboardPage,
    MatchingPage,
    HistoryPage,
    WorkPage,
    ModalPage,
    SignUpPage,
    EmailSignupPage,
    BuildProfilePage,
    SubNavComponent,
    ExpandableComponent,
    BottomToolbarComponent,
    NewUserHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
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
    SignUpPage,
    EmailSignupPage,
    ModalPage,
    BuildProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataFinder,
    ItemApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
