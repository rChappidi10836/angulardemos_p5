import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostData } from './postdata.model';
import { BlogpostsservicesService } from '../services/blogpostservice.service';


@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {
  dbPosts: PostData[]=[];
  isFetching = false;
  constructor(private bps:BlogpostsservicesService) { }

  ngOnInit(): void {
    this.FetchPosts();
  }

  onCreatePost(postData: PostData, form: NgForm){
    // console.log(postData);
    this.bps.createposts(postData.title,postData.content)
    .subscribe((responseData) => {
      // console.log(responseData);
      this.FetchPosts();
      form.reset();
    });
    
  }


  onFetchPosts(){ 
    // this.rtdbpost.push({
    //   title: "dum title",
    //   content: 'dum cont',
    // });
    this.FetchPosts();

  }
  
  FetchPosts() {
    this.isFetching=true;
    this.bps.fetchposts()
      .subscribe((posts) => {
        this.isFetching=false;
        // console.log(posts);
        this.dbPosts = posts;
      });
  }

  onDeletePosts(){
    this.bps.deleteposts()
    .subscribe(() => {
        console.log('Posts deleted');
        this.FetchPosts();
      })
  }
}
