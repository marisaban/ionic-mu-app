import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReturnUserPage } from './return-user';

@NgModule({
  declarations: [
    ReturnUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ReturnUserPage),
  ],
})
export class ReturnUserPageModule {}
