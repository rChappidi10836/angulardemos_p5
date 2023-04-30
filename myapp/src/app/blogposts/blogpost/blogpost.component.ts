import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PostData } from '../postdata.model';
import { BlogpostsservicesService } from 'src/app/services/blogpostservice.service';
import { BlogpostsComponent } from '../blogposts.component';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  @Input()
  post: PostData;
  
  constructor(private bps:BlogpostsservicesService,private blockposts: BlogpostsComponent) { }

  ngOnInit(): void {
  }

  onPostDelete(){
    console.log('Deleting '+this.post.id);
    this.bps.deletesinglepost(this.post.id)
      .subscribe(() =>{
        console.log('post deleted');
        this.blockposts.onFetchPosts();
      });
  }

}
