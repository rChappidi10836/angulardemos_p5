import { Component, OnInit } from '@angular/core';
import { medicareservice } from '../services/Medicare.service';
import { prodata, usersdata } from './prodata.module';

@Component({
  selector: 'app-medi',
  templateUrl: './medi.component.html',
  styleUrls: ['./medi.component.css']
})
export class MediComponent implements OnInit {

  constructor(private ms:medicareservice) { }

  ngOnInit(): void {
    this.getproducts();
    this.getusers();
  }

  check=false;
  meds: prodata[]=[];
  searchText: string;
  image=true
  payment=false
  login=true
  logout=false;
  invalid=false
  takedetailsvar=false
  cartvar=false

  userdata : any =[]

  onchecklogin(logindata:{phone:string,pwd:string}){
    for(const i in this.userdata){
      if(this.userdata[i].phone==logindata.phone && this.userdata[i].pwd==logindata.pwd)
      {
        this.login=false;
        this.ms.userinfo=this.userdata[i];
        this.ms.id=this.userdata[i].id;
      }
      else{
        this.invalid=true;
      }
    }
    this.logout=false;
  }


  onimage(){
    this.check=true;
  }






  getproducts(){

    this.ms.getporducts()
    .subscribe((prods)=>{
    this.meds=prods;
    // console.log("meds are");
    // console.log(this.meds);
    }
    );
    // console.log("condition = "+this.condition);
    // console.log(this.ms.getporducts().subscribe);
  }

  getusers(){
    this.ms.getusersfromdb()
    .subscribe((data)=>{
      this.userdata=data
    })
  }
  
  registeruser(registerdata:usersdata){
    console.log(registerdata);
    this.takedetailsvar=false;
    this.login=true;
    this.ms.reguser(registerdata)
    .subscribe(()=>{
      this.getusers();
      this.invalid=false;
    })
  }

  onregister(){
    this.takedetailsvar=true;
    this.login=false;
  }

  oncart(){
    this.cartvar=true;
  }

  logOut(){
    window.location.reload();
  }
}
