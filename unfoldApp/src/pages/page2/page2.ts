import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

// REFERENCE: https://github.com/driftyco/ionic-preview-app/blob/master/src/pages/inputs/basic/pages.ts
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  /*
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  */
  form;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController)
  {
    this.form = new FormGroup({
      gameName: new FormControl("", Validators.required),
      areaOfLife: new FormControl("", Validators.required),
      possibility: new FormControl("", Validators.required),
      outcome: new FormControl("", Validators.required),
      finalResult: new FormControl("", Validators.required),
      byWhen: new FormControl("", Validators.required),
      mileStonesAmount: new FormControl("", Validators.required),
    });
    /*
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    */
  }
  /*
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });
  }
  */
  processForm() {
    let alert = this.alertCtrl.create({
      title: "Game Created",
      message: "Game has been created!",
      buttons: [{
        text: 'Ok',
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present()
    }
  }
}
