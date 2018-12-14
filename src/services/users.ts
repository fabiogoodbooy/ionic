import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class UsersProvider{
    header: HttpHeaders;
    constructor(public http: HttpClient){
        this.header = new HttpHeaders;
        this.header =  this.header.append('Content-type','application/json');
        this.header =  this.header.append('Accept','application/json');
    }
    all(){
        let url ='/epi/user/_search';
        return this.http.get(url,{headers:this.header});
    }
    add(users){
    let url ='/epi/user/'+users.id;
    return this.http.post(url,{"name":users,"email":users.eamil},{headers: this.header});       
    }
}