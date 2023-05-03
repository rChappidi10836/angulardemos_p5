import { Component, OnInit } from '@angular/core';
import { PostData } from './postdata.model';
import { NgForm } from '@angular/forms';
import { BlogprojService } from '../services/blog-proj.service';

@Component({
  selector: 'app-blog-proj',
  templateUrl: './blog-proj.component.html',
  styleUrls: ['./blog-proj.component.css']
})
export class BlogProjComponent implements OnInit {
  dbPosts: PostData[]=[];
  isFetching = false;
  
  tosend: boolean=false;
  
  constructor(private bps:BlogprojService) { }

  ngOnInit(): void {
    this.FetchPosts();
  }

  onCreatePost(postData: PostData, form: NgForm){
    // console.log(postData);
    this.tosend=false;
    this.bps.createposts(postData.title,postData.content)
    .subscribe((responseData) => {
      // console.log(responseData);
      this.FetchPosts();
      form.reset();
    });
    
  }

  changeState(){
    this.tosend=!this.tosend;
  }
  onFetchPosts(){ 
    
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
