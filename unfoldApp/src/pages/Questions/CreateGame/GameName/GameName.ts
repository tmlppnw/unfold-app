import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GamePossibility } from '../GamePossibility/GamePossibility'

@Component({
  templateUrl: 'GameName.html'
})
export class GameName {
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
    this.navCtrl.push(GamePossibility, {gameName: this.form.gameName});
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
