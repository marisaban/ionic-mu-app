import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogHoursPage } from './log-hours';

@NgModule({
  declarations: [
    LogHoursPage,
  ],
  imports: [
    IonicPageModule.forChild(LogHoursPage),
  ],
})
export class LogHoursPageModule {}
