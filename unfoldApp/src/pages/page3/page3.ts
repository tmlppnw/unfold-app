import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  templateUrl: 'page3.html'
})
export class Page3 {

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
  ) { }

}
