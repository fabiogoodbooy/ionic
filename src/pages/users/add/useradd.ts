import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersProvider } from '../../../services/users';


@Component({
  selector: 'page-add',
  templateUrl: 'useradd.html'
})
export class Useradd {
  userForm : FormGroup ;
  id:any;
  rstId:any;
  rstName:any;
  rstEmail:any;
  constructor(public navCtrl: NavController , public navParams: NavParams ,private users: UsersProvider,private formBuilder:FormBuilder) {
   
    this.id = this.navParams.get('id');
    //console.log(this.id);
    this.users.getuser(this.id).subscribe((result:any)=>{
    //  alert(result);
      console.log(result._id);
      this.rstId=result._id;
      this.rstName=result._source.name;
      this.rstEmail=result._source.email;
    })
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