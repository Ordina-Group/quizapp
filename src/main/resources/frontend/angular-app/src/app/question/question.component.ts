import { Component, OnInit } from '@angular/core';
import {AnswerOptions, Survey} from '../surveys/survey';
import { SurveyService } from '../surveys/survey.service';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


  public _currentSurvey: Survey;
  private correct: boolean;

 _answeroptions = new AnswerOptions();

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

  // hier zetten we de string van de eventlistener van setradio naar de string variabele correct (dus bijv: option 3 naar variabele string option 3




  buttonClicked = false;




  clicked() {

      this.buttonClicked = !this.buttonClicked;

    }

  questionForm = new FormGroup({
    gender: new FormControl()
  });



  onFormSubmit(questionForm: any) {
    console.log(this.questionForm.valid);
    this._answeroptions.id= this.questionForm.get('gridradios').value;
    console.log(this._answeroptions.id)

  }
}














