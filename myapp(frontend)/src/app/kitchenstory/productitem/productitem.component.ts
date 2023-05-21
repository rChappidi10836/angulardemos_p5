import { Component, Input, OnInit } from '@angular/core';
import { ItemData } from '../itemdata.model';
import { kitchenstoryservice } from 'src/app/services/kitchenstory.service';
import { KitchenstoryComponent } from '../kitchenstory.component';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  @Input()
  item: ItemData;

  constructor(private kss:kitchenstoryservice,private ksc: KitchenstoryComponent) { }

  ngOnInit(): void {
  }

  buy(id){
  this.kss.Buyportal(id);
  // console.log("prod com");
  // console.log(id);
  this.ksc.callit();
  }
}
