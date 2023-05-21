import { Component, OnInit } from '@angular/core';
import { QuizProjComponent } from '../quiz-proj.component';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private pq:QuizProjComponent) { }

  ngOnInit(): void {
  }
  
  score = this.pq.score;
  len = this.pq.List.length;
}
