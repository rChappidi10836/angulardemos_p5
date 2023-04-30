import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostData } from '../blogposts/postdata.model';
import{ map } from 'rxjs/operators'





@Injectable({
providedIn: 'root'
})

export class BlogpostsservicesService {
private backendurl:string='https://myapp-http-api-project-default-rtdb.asia-southeast1.firebasedatabase.app/'
private url:string=this.backendurl+'posts.json'
private deleteurl:string=this.backendurl+'posts/'


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
 for(const key in responsedata){
postsarray.push({...responsedata[key],id:key})
}
return postsarray
}
))
}


deleteposts(){
return this.httpclient
 .delete(
 this.url
)
}




deletesinglepost(postid){
 return this.httpclient
 .delete(
 this.deleteurl+postid+'.json'
)}
}