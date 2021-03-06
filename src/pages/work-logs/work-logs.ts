import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogHoursPage } from '../log-hours/log-hours';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'



@Component({
  selector: 'page-work',
  templateUrl: 'work-logs.html'
})
export class WorkPage {
  jobitems: Array<{title: string}>;
  posts: any;

  logHoursPage = LogHoursPage;
  months: any = [];

  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public http: Http) {

    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
  ], 
  this.months = [
    { month: 'January', hours: 41, image: '/assets/img/january.png' },
    { month: 'February', hours: 20, image: '/assets/img/january.png'},
    { month: 'March', hours: 10, image: '/assets/img/march.jpg'},
    { month: 'April', hours: 5, image: '/assets/img/april.jpg'},
    { month: 'May', hours: 40, image: '/assets/img/may.jpg'},
    { month: 'June', hours: 15, image: '/assets/img/january.png'},
    { month: 'July', hours: 22, image: '/assets/img/january.png'},
    { month: 'August', hours: 13, image: '/assets/img/august.jpg'},
    { month: 'September', hours: 5, image: '/assets/img/september.jpg'},
    { month: 'October', hours: 20, image: '/assets/img/october.jpg'},
    { month: 'November', hours: 35, image: '/assets/img/january.png'},
    { month: 'December', hours: 15, image: '/assets/img/december.jpg'}
  ];
  }

  expandItem(item){
    if(item.expanded === true){
      item.expanded = false;
    }else {
      item.expanded = true;
    }
    
  }

  launchPage(){
    this.navCtrl.push(LogHoursPage);
  }

}
