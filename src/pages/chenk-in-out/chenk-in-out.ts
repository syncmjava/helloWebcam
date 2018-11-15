import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ChenkResultPage } from '../chenk-result/chenk-result';


/**
 * Generated class for the ChenkInOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chenk-in-out',
  templateUrl: 'chenk-in-out.html',
})
export class ChenkInOutPage {
  chenkResultPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chenkResultPage=ChenkResultPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChenkInOutPage');
  }

}
