import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: 'QGamePossibility.html'
})
export class QGamePossibility {
  form;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController)
  {
    this.form = new FormGroup({
      gamePossibility: new FormControl("", Validators.required),
    });
  }

  processForm() {
    let alert = this.alertCtrl.create({
      message: 'Saving info...moving to next step.',
      buttons: [{
        text: 'Ok'
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present()
    };
  }
}
