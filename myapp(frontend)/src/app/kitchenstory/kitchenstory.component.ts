import { Component, OnInit } from '@angular/core';
import { ItemData } from './itemdata.model';
import { kitchenstoryservice } from '../services/kitchenstory.service';
import { Orderdata } from './orderdata.model';

@Component({
  selector: 'app-kitchenstory',
  templateUrl: './kitchenstory.component.html',
  styleUrls: ['./kitchenstory.component.css']
})
export class KitchenstoryComponent implements OnInit {

  items: ItemData[]=[];
  order: Orderdata;
  searchText: any;
  condition: number=1;
  id;
  item;


  constructor(private ks:kitchenstoryservice) { }

  ngOnInit(): void {
    console.log('onit');
    this.FetchPosts();
    this.ks.showprods=true;
  }

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

  callit(){
    
    this.id = this.ks.id;
    console.log("call it");
    console.log("id "+this.id);


    this.ks.fetchid(this.id)
    .subscribe((item)=>{
      this.item=item; 
      console.log("idata")
      console.log(this.item)
    });
    this.condichan();
  }

  condichan(){
    this.condition = 2;
  }

  home(){
    this.condition =1 ;
  }
  
  addorder(order:Orderdata){
    console.log(order);
    this.ks.addorder(order);

    
    this.condition =3;
  }

  
}
