import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { QuizProjComponent } from '../quiz-proj.component';

@Component({
  selector: 'app-queset',
  templateUrl: './queset.component.html',
  styleUrls: ['./queset.component.css']
})
export class QuesetComponent implements OnInit {


  @Input()
  index: number;

  @Input()
  set: {id:number,que: string,options: string[],selected:string,answer: string};


  // accdata: {id:number,que: string,options: string[],selected:string,answer: string};

  selectedOption: string = null;

  constructor(private http: HttpClient,private pq:QuizProjComponent) { }

  ngOnInit(): void {
    // console.log(this.set.options);
  }

  selectedoption(id: string,option: string){
    
    const Id = parseInt(id) +1;
  
    const s={
      selected: option
    }
    this.http.patch(
      "http://localhost:3000/quedata/"+Id,s
    ).subscribe();
    this.pq.List[id].selected=option;
    // console.log(this.pq.List[id]);
  }

  getdata(){
    
    
  }

}
