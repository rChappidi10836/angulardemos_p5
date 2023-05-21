import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-proj',
  templateUrl: './quiz-proj.component.html',
  styleUrls: ['./quiz-proj.component.css']
})
export class QuizProjComponent implements OnInit {

  List=[];
  score:number;
  disques: boolean=true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(
      "http://localhost:3000/quedata"
    )
    .subscribe( (reqdata)=> {
      // console.log(reqdata);
      for(const key in reqdata){
        this.List.push({...reqdata[key],id:key});
      }
      // console.log(this.List);
    })
  }

  scorecal(){
    this.score=0;
    console.log(this.List);
    for(let i=0; i<this.List.length; i++){

      if(this.List[i].selected == this.List[i].ans){
        this.score++;
      }
    }
    const s={
      selected: ''
    }
    for(let i=1; i<=this.List.length; i++){
    this.http.patch(
      "http://localhost:3000/quedata/"+i,s
    ).subscribe();
    }
    this.disques=false;
  }

}
