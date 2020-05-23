import { Component, OnInit } from '@angular/core';
import { Survey } from './surveys/survey';
import { SurveyService } from './surveys/survey.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'Welkom bij de survey';


  errorMessage = '';
  currentSurvey: Survey;
  surveys: Survey[];


  constructor(
    private surveyService: SurveyService) {
    console.log("constructor van AppComponent");
  }


  ngOnInit() {
    console.log('ngInit van AppComponent');
    this.surveyService.getSurveys().subscribe(data => {
      this.surveys = data;
    });
  }

  getSurvey(id: number) {
    this.surveyService.getSurvey(id).subscribe({
      next: survey => this.currentSurvey = survey,
      error: err => this.errorMessage = err
    });
  }
}





