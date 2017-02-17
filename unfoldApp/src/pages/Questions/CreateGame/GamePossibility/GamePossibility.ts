import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Outcome } from '../Outcome/Outcome';

@Component({
  templateUrl: 'GamePossibility.html'
})
export class GamePossibility {
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

  transition() {
    this.navCtrl.push(Outcome, {gamePossibility: this.form.value.gamePossibility});
  }

  processForm() {
    let alert = this.alertCtrl.create({
      message: this.form.value.gamePossibility,
      buttons: [{
        text: 'Ok'
      }]
    });

    if (this.form.status === 'VALID') {
      // alert.present()
      this.transition()
    };
  }
}
