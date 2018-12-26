import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersProvider } from '../../services/users';

@Component({
  selector: 'page-contact',
  templateUrl: 'login.html'
})
export class LoginPage {
    loginForm : FormGroup ;
    loginlist:any;
  constructor(public navCtrl: NavController,private formBuilder:FormBuilder,private users : UsersProvider) {
    this.loginForm = this.formBuilder.group({
       
        password:['',Validators.required],
        email:['',Validators.email]
   
      })

  }
  login(){
    this.users.login(this.loginForm.value).subscribe((userTabel:any)=>
    {
        

        this.loginlist = userTabel.hits.hits;

        alert(this.loginlist.length);
        if(this.loginlist.length !== 0){

       
            localStorage.setItem('email',this.loginlist[0]._source.email);
           
        }
        else{
            alert("erreur");
        }
            
          
    
});

}

}
