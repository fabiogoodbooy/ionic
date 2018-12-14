import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersProvider } from '../../../services/users';


@Component({
  selector: 'page-home',
  templateUrl: 'useradd.html'
})
export class Useradd {
  userForm : FormGroup ;
  constructor(public navCtrl: NavController ,private users: UsersProvider,private formBuilder:FormBuilder) {
   this.userForm = this.formBuilder.group({
     id:['',[Validators.required,Validators.min(1)]],
     name:['',Validators.required],
     email:['',Validators.email]

   })
    
  
    
  }
  add(){
    this.users.add(this.userForm.value).subscribe((result:any)=>{
      alert(result);
      
    });
  }
}