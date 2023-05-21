import { Component, Input, OnInit } from '@angular/core';
import { prodata } from '../prodata.module';
import { medicareservice } from 'src/app/services/Medicare.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  med: prodata;

  constructor(private ms:medicareservice) { }

  ngOnInit(): void {
    
  }

  addtocart(dat){
    this.ms.addtocart(dat);
  }
  
}
