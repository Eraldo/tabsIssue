import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the Tabs2Page tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html'
})
export class Tabs2Page {

  first2Root = 'First2Page'
  second2Root = 'Second2Page'


  constructor(public navCtrl: NavController) {}

}
