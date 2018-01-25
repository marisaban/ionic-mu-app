import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { NgCalendarModule  } from 'ionic2-calendar';
import { Camera } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';

import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MatchingPage } from '../pages/matching-jobs/matching-jobs';
import { HistoryPage } from '../pages/job-history/job-history';
import { WorkPage } from '../pages/work-logs/work-logs';
import { ModalPage } from '../pages/modal/modal';
import { ReturnUserPage } from '../pages/return-user/return-user';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { EmailSignupPage } from '../pages/email-signup/email-signup';
import { BuildProfilePage } from '../pages/build-profile/build-profile';
import { JobDetailsPage } from '../pages/job-details/job-details';
import { LogHoursPage } from '../pages/log-hours/log-hours';
import { EventModalPage } from '../pages/event-modal/event-modal';

//custom component
import { SubNavComponent } from '../components/sub-nav/sub-nav';
import { ExpandableComponent } from '../components/expandable/expandable';
import { BottomToolbarComponent } from '../components/bottom-toolbar/bottom-toolbar';

import { ReactiveFormsModule } from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataFinder } from '../providers/datafinder';
import { ItemApi } from '../providers/item-api';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DashboardPage,
    MatchingPage,
    HistoryPage,
    WorkPage,
    ModalPage,
    ReturnUserPage,
    SignUpPage,
    EmailSignupPage,
    BuildProfilePage,
    JobDetailsPage,
    LogHoursPage,
    SubNavComponent,
    ExpandableComponent,
    BottomToolbarComponent
    ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    ReturnUserPage,
    EmailSignupPage,
    ModalPage,
    BuildProfilePage,
    JobDetailsPage,
    LogHoursPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataFinder,
    ItemApi,
    Camera,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
