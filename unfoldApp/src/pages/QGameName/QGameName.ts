import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { QGamePossibility } from '../QGamePossibility/QGamePossibility'

@Component({
  templateUrl: 'QGameName.html'
})
export class QGameName {
  form;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController)
  {
   this.form = new FormGroup({
     gameName: new FormControl("", Validators.required),
   });
  }

  transition() {
    console.log(this.navCtrl);
    this.navCtrl.push(QGamePossibility, {gameName: this.form.gameName});
  }

  processForm() {
    let alert = this.alertCtrl.create({
      message: 'Saving info...moving to next step.',
      buttons: [{
        text: 'Ok',
      }]
    });

    if (this.form.status === 'VALID') {
      // alert.present();
      this.transition();

    };
  }

}
