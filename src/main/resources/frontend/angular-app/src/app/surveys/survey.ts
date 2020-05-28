/*export interface ISurvey {

    id: number;
    questionDescription : string;
    questions: Array<IQuestion>;
  }

export interface IQuestion {
    answeroptions: Array<IAnswerOptions>;
    number : number;
}


  export interface IAnswerOptions {
        id: number;
        number: number;
        value: string;
        correct: boolean
  }*/
import {OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SurveyService} from "./survey.service";

export class Survey implements OnInit {

  id: number;
  surveyDescription: string;
  questions: Array<Question>;
  pageTitle = 'Surveys';
  errorMessage = '';
  survey: Survey | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: SurveyService) {
    console.log('komt ie hier dan');
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getSurvey(id);
    }
  }

  getSurvey(id: number) {
    this.productService.getSurvey(id).subscribe({
      next: survey => this.survey = survey,
      error: err => this.errorMessage = err
    });
  }


}


export class Question {
  answerOptions: Array<AnswerOptions>;
  number: number;
  questionDescription: string;
}


export class AnswerOptions {
  id: number;
  number: number;
  value: string;
  correct: boolean;
  answerExplanation: string;
}


