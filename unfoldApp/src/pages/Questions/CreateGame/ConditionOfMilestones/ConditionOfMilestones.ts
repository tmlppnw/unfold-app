import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Page1 } from '../../../page1/page1'

@Component({
  templateUrl: 'ConditionOfMilestones.html'
})
export class ConditionOfMilestones {
  form;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController)
  {
    this.form = new FormGroup({
      // TODO: LOOK UP HOW TO DYNAMICALLY SAVE IT!
      conditionOfMilestones: new FormControl("", Validators.required),
    });
  }

  transition() {
    // TODO: SAVE SOMEWHERE!!!
    console.log(this.form.value);
    this.navCtrl.push(Page1);
  }

  processForm() {
    let alert = this.alertCtrl.create({
      message: this.form.value.conditionOfMilestones,
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
