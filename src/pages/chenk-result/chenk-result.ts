import { Component } from '@angular/core';
import {  NavController, NavParams, PopoverController  } from 'ionic-angular';
import { ScanPage } from '../scan/scan';
/**
 * Generated class for the ChenkResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chenk-result',
  templateUrl: 'chenk-result.html',
})
export class ChenkResultPage {
scanPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.scanPage=ScanPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChenkResultPage');
  }

goPopToRoot() {
     this.navCtrl.popTo(ScanPage); 
  }
}
