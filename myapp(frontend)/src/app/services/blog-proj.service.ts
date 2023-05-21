import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostData } from '../blogposts/postdata.model';
import{ map } from 'rxjs/operators'





@Injectable({
providedIn: 'root'
})

export class BlogprojService {
private url:string='http://localhost:3000/data'
// private url:string=this.backendurl+'posts.json'
private deleteurl:string=this.url+'/'


constructor(private httpclient:HttpClient) { }

createposts(title:string,content:string){
const mypostdata:PostData={title:title,content:content}
return this.httpclient.post(
this.url, mypostdata
)}


fetchposts(){
 return this.httpclient.get(
this.url
)
.pipe(
 map((responsedata)=>{
 const postsarray=[]
 console.log("response data is");
 console.log(responsedata);
 for(const key in responsedata){
postsarray.push({...responsedata[key],id:responsedata[key].id})
}
// console.log(postsarray);
return postsarray
}
))
}


updatepost(body,id){
    this.httpclient.patch(
        this.url+"/"+id,body
    ).subscribe();
}



deleteposts(){
return this.httpclient
 .delete(
 this.url
)
}




deletesinglepost(postid){
    console.log(this.deleteurl+postid);
 return this.httpclient
 .delete(
 this.deleteurl+postid
)}
}