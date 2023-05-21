import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  confirm=false
  constructor() { }

  ngOnInit(): void {
  }


  confirmationpage(){
    this.confirm=true
  }
}
