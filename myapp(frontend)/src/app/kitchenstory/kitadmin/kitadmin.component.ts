import { Component, OnInit } from '@angular/core';
import { creds } from '../orderdata.model';
import { kitchenstoryservice } from 'src/app/services/kitchenstory.service';
import { ItemData } from '../itemdata.model';

@Component({
  selector: 'app-kitadmin',
  templateUrl: './kitadmin.component.html',
  styleUrls: ['./kitadmin.component.css']
})
export class KitadminComponent implements OnInit {

  constructor(private ks:kitchenstoryservice) { }

  ngOnInit(): void {
    this.getcreds();
    this.FetchPosts();
  }

  logged=false;
  check=false;
  condition: string="home";
  pwdcond=0;
  logagain=false;
  k: creds;
  items: ItemData[]=[];
  add=false;

  FetchPosts() {
    console.log("Fetchposts")
    this.ks.fetchposts()
      .subscribe((posts) => {
        this.items = posts;
        console.log('items');
        console.log(this.items);
      });
      console.log("Called Fetchposts");
  }

  adminlogin(data:creds){
    // console.log('data');
    // console.log(data.pwd)
    // console.log('k email and pwd')
    // console.log(typeof this.k.email)
    // console.log(typeof this.k.pwd)
    // console.log(data.pwd==this.k.pwd);
    // console.log(data.email==this.k.email)
    if(data.pwd==this.k.pwd && data.email==this.k.email){
      this.logged=true;
      this.logagain=false;
    }
    else{
      this.check=true;
    }
    console.log(this.logged);
  }

  features(){
    this.condition='home';
  }

  others(){
    this.condition='others';
  }

  pwdch(){
    this.condition='pwd';
  }

  addordel(){
    this.condition='add/remove';
  }

  changepwd(o,n){
    if(this.k.pwd==o && this.k.pwd!=n){
      this.k.pwd=n;
      this.ks.updateadmin(this.k);
      this.logged=false;
      this.logagain=true;
      this.condition='home';
      this.pwdcond=0;
    }else if(this.k.pwd==n){
      this.pwdcond=1;
    }else if(this.k.pwd!=o){
      this.pwdcond=2;
    }
    
    // console.log(n);
  }

  getcreds(){
    this.ks.getadmin().
    subscribe((id)=>{
      this.k=id[0];
      // console.log('k');
      // console.log(this.k);
      // console.log('creds');
      // console.log(id);
    });
  }

  addit(){
    this.add=!this.add;
  }

  addite(v:ItemData){
    console.log(typeof v);
    console.log(v);
    this.ks.additem(v).subscribe(()=>{
      this.FetchPosts();
    });
    this.addit();
  }

  delete(id){
    this.ks.deleteid(id).subscribe(()=>{
      this.FetchPosts();
    })
    console.log('deleted item');
    console.log(id);
  }

  logout(){
    this.logged=false;
    this.pwdcond=0;
    this.add=false;
  }
}
