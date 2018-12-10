import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Operator } from '../../services/opertor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
operation : FormGroup;
  constructor(public navCtrl: NavController ,private formBuilder:FormBuilder , private ops:Operator ,private alertCtrl:AlertController) {
    this.operation = this.formBuilder.group({
      n1:['',[Validators.required,Validators.min(0)]],
      n2:['',[Validators.required,Validators.min(0)]],
      op:['+']
    })
    
  }

  calculate(){
    let rst=this.ops.calculate(this.operation);
    let alert = this.alertCtrl.create({
      title:'Resulta',
      subTitle:rst,
      buttons:['close']
      });
      alert.present();
  }
}
