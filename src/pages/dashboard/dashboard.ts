import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

//pages 
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    
  }//constructor

}//export class


  