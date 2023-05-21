import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class kitchenstoryservice {

    id: any;
    showprods: boolean = true;

    constructor(private httpclient:HttpClient){}
    private iurl: string = 'http://localhost:3000/items';
    private ourl: string = 'http://localhost:3000/orders';
    getData(){
    }

    fetchposts(){
        return this.httpclient.get(
       this.iurl
       )
       .pipe(
        map((responsedata)=>{
        const postsarray=[]
        // console.log("response data is");
        // console.log(responsedata);
        for(const key in responsedata){
            // console.log(key);
       postsarray.push({...responsedata[key]})
       }
    //    console.log('postarray');
    //    console.log(postsarray);
       return postsarray
       }
       ))
       }

       fetchid(id){
        console.log("fetchid called");
       return this.httpclient.get(
       this.iurl+"/"+id
       )
       .pipe(
        map((iddata)=>{
        console.log("id data is");
        console.log(iddata);
        const idata=iddata;
    //     for(const key in iddata){
    //         // console.log(key);
    //    postsarray.push({...iddata[key]})
    //    }
       
       console.log('post data');
       console.log(idata);
       return idata;
       }
       ))
       }

       Buyportal(id){
        this.id=id;
        this.showprods = ! this.showprods;
        console.log("service com");
        console.log(this.id);
      }


      addorder(body){
        console.log("body");
        console.log(body);   
        return this.httpclient.post(
            this.ourl, body
            
        ).subscribe();
      }
}
