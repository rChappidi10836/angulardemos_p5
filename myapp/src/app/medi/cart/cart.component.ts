import { Component, OnInit } from '@angular/core';
import { prodata } from '../prodata.module';
import { medicareservice } from 'src/app/services/Medicare.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  temp:prodata[]=[];
  payment=false;
  totalamount=0;

  constructor(private ms:medicareservice) { }

  ngOnInit(): void {
    this.loaditems()
  }

  addone(addintem:prodata){
    this.ms.cart.push(addintem);
    this.totalamount=0
    this.loaditems()
  }

  loaditems(){
    this.temp=this.ms.cart;
    for(const i in this.temp){
      this.totalamount = this.totalamount+parseInt(this.temp[i].sp)
    }
    console.log(this.totalamount)
  }

  delete(i){
    this.ms.cart[i]
    this.totalamount=0
    for(const i in this.ms.cart){
      if(this.ms.cart[i]){

      }
    }
    console.log(this.ms.cart);
    this.loaditems()
  }

  onpayment(){
    this.payment=true;
  }

}
