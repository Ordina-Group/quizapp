import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { SurveyScoreService } from '../services/survey-score.service';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndpageComponent implements OnInit {
  correctAnswer: number;
  incorrectAnswer: number;

  constructor(private surveyScoreService: SurveyScoreService) {
  }

  ngOnInit(): void {
    this.correctAnswer = this.surveyScoreService.getCorrectAnswers();
    this.incorrectAnswer = this.surveyScoreService.getIncorrectAnswers();
  }

}
