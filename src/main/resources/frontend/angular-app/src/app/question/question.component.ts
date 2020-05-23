import { Component, OnInit } from '@angular/core';
import { Survey } from '../surveys/survey';
import { SurveyService } from '../surveys/survey.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public _currentSurvey: Survey;
  public get currentSurvey(): Survey {
    return this._currentSurvey;
  }
  public set currentSurvey(value: Survey) {
    this._currentSurvey = value;
  }
  errorMessage = '';

  constructor(
    private surveyService: SurveyService) {
    console.log('constructor van Question');
  }

  ngOnInit(): void {
    this.surveyService.getSurvey(1).subscribe({
      next: survey => this.currentSurvey = survey,
      error: err => this.errorMessage = err
    });
  }

}
