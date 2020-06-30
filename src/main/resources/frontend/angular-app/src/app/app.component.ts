import { Component, OnInit } from '@angular/core';
import { Survey } from './surveys/survey';
import { SurveyService } from './services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Welkom bij de survey';

  errorMessage = '';

  constructor() {}
  ngOnInit() {}

}





