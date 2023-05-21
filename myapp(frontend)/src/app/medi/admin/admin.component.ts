import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  checkstatus=0;
  errorcheckstatus=0;
  portal=false;

  constructor() { }

  ngOnInit(): void {
  }

  checkadmin(admindata:{name:string,password:string}){
    if(admindata.name=="raja" && admindata.password=="s"){
      this.checkstatus=1;
      this.portal=true;
    }
    else{
      this.errorcheckstatus=-1;
    }
  }
}
