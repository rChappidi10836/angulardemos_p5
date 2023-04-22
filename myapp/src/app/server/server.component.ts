import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isServerEnabled: boolean = true;
  serverId: number =1;
  serverName: String= 'servernam';
  serverStatus: String = "online";
  serverDescripton: String = 'init desc';

  getServerStatus(){
    return this.serverStatus;
  }

  onPowerBtnClick(){
    
    if(this.serverStatus=="offline"){
      this.serverStatus="online";
    }else if(this.serverStatus=="online"){
      this.serverStatus="offline";
    }
  }

  getPowerBtnlabel(){
    if(this.serverStatus=="offline"){
      return "ON";
    }else if(this.serverStatus=="online"){
      return "OFF";
    }
  }

  onUpdateServreName(event: any){
    this.serverName =event.target.value;
  }

  getServerColor(){
    return this.serverStatus == 'online' ? 'green' : 'tomato';
  }

  getServerClass(){
    return this.serverStatus == 'online' ? 'btn-success' : 'btn-danger' 
  }
}
