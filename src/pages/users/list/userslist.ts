import { Component } from "@angular/core";
import { UsersProvider } from "../../../services/users";
import { Page } from "ionic-angular/umd/navigation/nav-util";
import { Useradd } from "../add/useradd";
import { NavParams, LoadingController } from "ionic-angular";
@Component({
    selector: 'users-page',
    templateUrl:'userslist.html'
})
export class Userslist{
    usersList:any;
    
    Useradd:Page;
    constructor(private users: UsersProvider , public navParams: NavParams, public loader: LoadingController){
        
        let load = loader.create({
            content :'Loading'
        });
        load.present().then(()=>{

        
        this.users.all().subscribe((userTabel:any)=>
        {
            //alert(this.usersList);

            this.usersList = userTabel.hits.hits;
            console.log(this.usersList);
       this.Useradd = Useradd;
    });
    load.dismissAll();
})
   
}
}
