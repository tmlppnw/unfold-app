import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {ByWhen} from '../ByWhen/ByWhen';

@Component({
  templateUrl: 'FinalResult.html'
})
export class FinalResult {
  form;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController)
  {
    this.form = new FormGroup({
      finalResult: new FormControl("", Validators.required),
    });
  }

  transition() {
    this.navCtrl.push(ByWhen, {finalResult: this.form.value.finalResult});
  }

  processForm() {
    let alert = this.alertCtrl.create({
      message: this.form.value.finalResult,
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
