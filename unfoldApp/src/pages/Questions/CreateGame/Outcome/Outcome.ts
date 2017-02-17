import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {FinalResult} from '../FinalResult/FinalResult';

@Component({
  templateUrl: 'Outcome.html'
})
export class Outcome {
  form;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController)
  {
    this.form = new FormGroup({
      outcome: new FormControl("", Validators.required),
    });
  }

  transition() {
    this.navCtrl.push(FinalResult, {outcome: this.form.value.outcome});
  }

  processForm() {
    let alert = this.alertCtrl.create({
      message: this.form.value.outcome,
      buttons: [{
        text: 'Ok'
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present();
      this.transition();
    }
  }

}
