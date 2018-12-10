import { Component } from "@angular/core";
import { UsersProvider } from "../../../services/users";
//import { NavParams } from "ionic-angular";
@Component({
    selector: 'users-page',
    templateUrl:'userslist.html'
})
export class Userslist{
    usersList:any;
    //user : any;
    constructor(private users: UsersProvider /*, public navParams: NavParams*/){
        this.users.all().subscribe((userTabel:any)=>
        {

            this.usersList = userTabel;
       
    });
    //this.user = navParams.get('user');
}
}
