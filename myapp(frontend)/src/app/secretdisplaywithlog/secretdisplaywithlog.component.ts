import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretdisplaywithlog',
  templateUrl: './secretdisplaywithlog.component.html',
  styleUrls: ['./secretdisplaywithlog.component.css']
})
export class SecretdisplaywithlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  secret: String= 'hitler is alive';
  secStatus: String = 'novis';
  logs=[];

  onClick(){
    let dateTime =  new Date();
    if (this.secStatus=='novis'){
      this.secStatus='vis';
      this.logs.push("Show pushed at "+ dateTime.toLocaleTimeString());
    }
    else if(this.secStatus=='vis'){
      this.secStatus='novis';
      this.logs.push("Hide pushed at "+ dateTime.toLocaleTimeString());
    }
  }

  getColr(){
    return this.secStatus=='novis'? 'green' : 'red';
  }

  Restlogs(){
    this.logs=[];
  }

}
