import { Component, OnInit } from '@angular/core';
import { prodata } from '../../prodata.module';
import { medicareservice } from 'src/app/services/Medicare.service';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {


  addform=false;
  display=true
  update=false
  var=false
  post: prodata
  meds: prodata[]=[]
  constructor(private ms:medicareservice) { }


  ngOnInit(): void {
    this.load()
  }

  load(){
    this.ms.getporducts()
    .subscribe((data)=>{
      this.meds=data
      console.log(this.meds)
    })
  }

  remove(id:number){
    this.ms.deletemedicine(id)
    .subscribe(()=>{
      this.load()
    })
  }

  changemedstatus(id: number){
    this.ms.changestatus(id)
    .subscribe(()=>{
      this.load()
    })
  }

  edit(existupdatedata: prodata){
    this.update=true
    this.post=existupdatedata
  }

  updatepost(data){
    this.ms.editmedicines(data)
    .subscribe(()=>{
      this.update=false
      this.load()
    })
  }

  onaddform(){
    this.addform=true
  }

  add(data:prodata){
    console.log(data)
    this.ms.addmed(data)
    .subscribe(()=>{
      this.addform=false
      this.load()
    })
  }

  back(){
    window.location.reload();
  }
}
