import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  products = [];

  onAddProduct(productData: {
    ProductName: string;
    ProductDesc: string;
    ProductQuant: number;
    ProductCost: number;
  }){
    //body
    this.products.push(productData);
      // ProductName: productData.ProductName,
      // ProductDesc: productData.ProductDesc,
      // ProductQuant: productData.ProductQuant,
      // ProductCost: productData.ProductCost,
    
  }

}
