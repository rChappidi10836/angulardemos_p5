import { Component, Input, OnInit } from '@angular/core';
import { PostData } from '../postdata.model';
import { BlogProjComponent } from '../blog-proj.component';
import { BlogprojService } from 'src/app/services/blog-proj.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input()
  post: PostData;

  udvar: number=-1;
  
  
  constructor(private bps:BlogprojService,private blockproj: BlogProjComponent) { }

  ngOnInit(): void {
  }

  onPostDelete(){
    console.log('Deleting '+this.post.id);
    this.bps.deletesinglepost(this.post.id)
      .subscribe(() =>{
        console.log('post deleted');
        this.blockproj.onFetchPosts();
      });
  }
  

  onFetch(){
    this.blockproj.FetchPosts();
  }

  onUpdateStatus(id){
    this.udvar=id;
  }

  onPostUpdate(postdata:PostData){
    console.log("onpostupdate called")
    console.log(postdata.id);
    this.bps.updatepost(postdata,postdata.id);//updation
    this.blockproj.FetchPosts();
  }


  disableOtherUpdateButtons() {
    // disable all Update buttons except the current one being updated
    const updateButtons = document.querySelectorAll('.Update');
    updateButtons.forEach((button: HTMLButtonElement) => {
      if (button.textContent !== 'Update' && button.disabled === false) {
        button.disabled = true;
      }
    });
  }

}

