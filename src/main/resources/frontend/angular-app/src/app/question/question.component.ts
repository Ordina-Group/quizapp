import { Component, OnInit } from '@angular/core';
import {AnswerOptions, Question, Survey} from '../surveys/survey';
import { SurveyService } from '../surveys/survey.service';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  answers: string[];
  chosenAnswerString: string;
  answerOptionsArray: AnswerOptions[];
  chosenAnswer: AnswerOptions;
  isCorrect: Boolean;
  currentQuestion = 0;
  buttonClicked = false;
  show = true;
  showVolgende = false;


  public _currentSurvey: Survey;
  private correct: boolean;


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

//hier wordt de String array"answers" geleegd in de functie,
// vervolgens wordt de array gelijk /gematched aan de answeroption van deze vraag die uit de database zijn gehaald
// In de forloop (HTML) wordt dan de answers gematched met dezelfde value waarde (dus antwoord A wordt radiobutton met Antwoord A)
  setAnswersToRadiobuttons() {
    this.answers = [];
    this.answerOptionsArray = this.currentSurvey.questions[this.currentQuestion].answerOptions;
    this.answerOptionsArray.forEach(answerOption => {
      this.answers.push(answerOption.value);
    });
  }


  public get currentSurvey(): Survey {
    return this._currentSurvey;
  }

  public set currentSurvey(value: Survey) {
    this._currentSurvey = value;
    this.setAnswersToRadiobuttons();
  }

  errorMessage = '';

//deze functie laat het witte vlak met uitleg zien en reset de buttonclicked gelijk
  // showvolgende knop wordt getoond
  clicked() {
    this.buttonClicked = !this.buttonClicked;
    this.showVolgende = !this.showVolgende;
  }

  questionForm = new FormGroup({
    //gridradios: new FormControl()
  });


//Als je op submit drukt, laat het programma het witte vlak zien en verdwijnt de knop submit
// (dit gebeurd met show) en clicked() functie wordt aangeroepen
  onFormSubmit(questionForm: any) {
    console.log(questionForm.value)
    this.clicked();
    this.show = !this.show;
    this.answerIsCorrect();

  }

  //als je op knop "volgende" drukt wil je de volgende vraag laten zien
  nextQuestion() {
    this.currentQuestion++;
    this.setAnswersToRadiobuttons();
    this.show = true;
    this.showVolgende = false;
    this.buttonClicked = false;
    this.chosenAnswer = null;
    console.log("witte vlak is nu weg");
  }

  public answerIsCorrect(): boolean {
    this.isCorrect = this.chosenAnswer.correct;
    if (this.isCorrect === false) {

      return false;
    } else {
      return true;
    }

  }
}




