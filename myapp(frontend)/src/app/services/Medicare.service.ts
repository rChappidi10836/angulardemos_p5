import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { prodata, usersdata } from "../medi/prodata.module";

@Injectable({
    providedIn: 'root'
})




export class medicareservice{
    
    url="http://localhost:8080/meds";
    uurl="http://localhost:8080/users";
    regurl="http://localhost:8080/registeruser";
    meddelurl="http://localhost:8080/deletemed/";
    mediturl="http://localhost:8080/editmeds";
    medstateurl="http://localhost:8080/changemedstatus/";
    medaddurl="http://localhost:8080/addmed";
    userinfo:usersdata
    meds: prodata[]=[];
    id;

    cart: prodata[]=[];
    constructor(private httpclient:HttpClient){}

    getporducts(){
        console.log('cart');
        console.log(this.cart);
        return this.httpclient.get(this.url)
        .pipe(
            map((responsedata)=>{
            const postsarray=[]
            // console.log("response data is");
            // console.log(responsedata);
            for(const key in responsedata){
                // console.log(key);
           postsarray.push({...responsedata[key]})
           }
           console.log('postarray');
           console.log(postsarray);
           return postsarray
           }
           ));

    }

    getusersfromdb(){
        return this.httpclient.get(this.uurl);
    }

    reguser(regdata:usersdata){
        return this.httpclient.post(this.regurl,regdata);
    }

    deletemedicine(id:number){
        console.log(id+"to delete")
        return this.httpclient.get(this.meddelurl+id);
    }

    changestatus(id:number){
        return this.httpclient.get(this.medstateurl+id);
    }

    editmedicines(data){
        return this.httpclient.post(this.mediturl,data);
    }

    addmed(data){
        return this.httpclient.post(this.medaddurl,data);
    }



    addtocart(item: prodata){
        this.cart.push(item);
        console.log(this.cart);
    }



}