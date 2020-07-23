import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { QuizScoreService } from '../services/quiz-score.service';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndpageComponent implements OnInit {
  correctAnswer: number;
  incorrectAnswer: number;

  constructor(private quizScoreService : QuizScoreService) {
  }

  ngOnInit(): void {
    this.correctAnswer = this.quizScoreService.getCorrectAnswers();
    this.incorrectAnswer = this.quizScoreService.getIncorrectAnswers();
  }

}
