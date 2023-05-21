import { Component, OnInit } from '@angular/core';
import { prodata, usersdata } from '../prodata.module';
import { medicareservice } from 'src/app/services/Medicare.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {


  list:prodata[]=[];
  newuserdata:usersdata;

  constructor(private ms:medicareservice) { }

  ngOnInit(): void {
    this.list=this.ms.cart
    this.newuserdata=this.ms.userinfo
    console.log('list from confirm')
    console.log(this.list)
  }



}
