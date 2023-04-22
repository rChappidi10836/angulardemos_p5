import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  constructor() { 
    console.log('product comp constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnDestroy called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('component initialized');
  }

  @Input('product')
  product:{
    ProductName: string;
    ProductDesc: string;
    ProductQuant: number;
    ProductCost: number;
  }

}
