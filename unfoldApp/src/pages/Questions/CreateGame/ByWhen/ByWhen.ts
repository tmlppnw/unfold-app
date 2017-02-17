import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {NumberOfMilestones} from '../NumberOfMilestones/NumberOfMilestones';

@Component({
  templateUrl: 'ByWhen.html'
})
export class ByWhen {
  form;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController)
  {
    this.form = new FormGroup({
      byWhen: new FormControl("", Validators.required),
    });
  }

  transition() {
    this.navCtrl.push(NumberOfMilestones, {byWhen: this.form.value.byWhen});
  }

  processForm() {
    let alert = this.alertCtrl.create({
      message: this.form.value.byWhen,
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
