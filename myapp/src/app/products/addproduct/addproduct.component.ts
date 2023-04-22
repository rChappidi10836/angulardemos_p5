import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newProductName: string;
  newProductDesc: string;
  newProductQuant: number;
  newProductCost: number;

  @Output()
  productAdded = new EventEmitter<{
    ProductName: string;
    ProductDesc: string;
    ProductQuant: number;
    ProductCost: number;
  }>();

  onAddProduct(){
    this.productAdded.emit({
      ProductName: this.newProductName,
      ProductDesc: this.newProductDesc,
      ProductQuant: this.newProductQuant,
      ProductCost: this.newProductCost,
    });
    this.resetFields();
  }

  resetFields(){
    this.newProductName='';
    this.newProductDesc='';
    this.newProductQuant=null;
    this.newProductCost=null;
  }
}
