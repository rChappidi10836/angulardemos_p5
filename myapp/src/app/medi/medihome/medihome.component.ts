import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medihome',
  templateUrl: './medihome.component.html',
  styleUrls: ['./medihome.component.css']
})
export class MedihomeComponent implements OnInit {

  home=true
  buypage=false
  adminpage=false
  cart=false

  constructor() { }

  ngOnInit(): void {
  }

  onbuypage(){
    this.buypage=true
    this.home=false
  }

  onadminpage(){
    this.adminpage=true;
    this.home=false;
  }

  oncart(){
    this.cart=true;
  }

}

