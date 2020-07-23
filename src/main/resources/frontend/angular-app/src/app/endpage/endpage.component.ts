import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { QuizScoreService } from '../services/quiz-score.service';
import {QuizService} from "../services/quiz.service";
import {ScoreEntry} from "../model/scoreEntry";

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndpageComponent implements OnInit {
  correctAnswer: number;
  incorrectAnswer: number;
  scoreEntry: ScoreEntry;

  constructor(private quizService: QuizService, private quizScoreService: QuizScoreService) {
  }

  ngOnInit(): void {
    this.correctAnswer = this.quizScoreService.getCorrectAnswers();
    this.incorrectAnswer = this.quizScoreService.getIncorrectAnswers();
  }

}
