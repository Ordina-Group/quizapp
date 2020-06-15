import { Component, OnInit } from '@angular/core';
import { AnswerOptions, Question, Survey } from '../surveys/survey';
import { SurveyService } from '../surveys/survey.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  answers: string[];
  answerOptionsArray: AnswerOptions[];
  chosenAnswer: AnswerOptions;
  selectedValue: String = '';
  currentQuestion = 0;
  currentQuestionObject: Question;
  buttonClicked = false;
  show = true;
  showVolgende = false;
  public _currentSurvey: Survey;
  private correct: boolean;
  errorMessage = '';
  questionForm = new FormGroup({
    // gridradios: new FormControl()
  });

  ngOnInit(): void {
    this.surveyService.getSurvey(1).subscribe({
      next: survey => this.currentSurvey = survey,
      error: err => this.errorMessage = err
    });
  }

  constructor(
    private surveyService: SurveyService, private route: ActivatedRoute, private router: Router) {
    console.log('constructor van Question');
  }


  public get currentSurvey(): Survey {
    return this._currentSurvey;
  }

  public set currentSurvey(value: Survey) {
    this._currentSurvey = value;
    this.setAnswersToRadiobuttons();
  }

  // hier wordt de String array"answers" geleegd in de functie,
  // vervolgens wordt de array gelijk /gematched aan de answeroption van deze vraag die uit de database zijn gehaald
  // In de forloop (HTML) wordt dan de answers gematched met dezelfde value waarde (dus antwoord A wordt radiobutton met Antwoord A)
  setAnswersToRadiobuttons() {
    this.answers = [];
    this.currentQuestionObject = this.currentSurvey.questions.filter(question => {
      return question.number === this.currentQuestion + 1;
    })[0];
    if (this.currentQuestionObject === undefined) {
      console.log('geen volgende vraag!');
      // hier wil je iets doen om naar een eindpagina te gaan.
      this.router.navigate(['/endpage']);
      return;
    }
    this.answerOptionsArray = this.currentQuestionObject.answerOptions;
    this.answerOptionsArray.forEach(answerOption => {
      this.answers.push(answerOption.value);
    });
  }

  // deze functie laat het witte vlak met uitleg zien en reset de buttonclicked gelijk
  // showvolgende knop wordt getoond
  clicked() {
    this.buttonClicked = !this.buttonClicked;
    this.showVolgende = !this.showVolgende;
  }


  // Als je op submit drukt, laat het programma het witte vlak zien en verdwijnt de knop submit
  // (dit gebeurd met show) en clicked() functie wordt aangeroepen.
  // Tevens wordt het antwoord gekoppeld met het juiste antwoord dmv aanroepen setchosenanswer functie
  onFormSubmit(questionForm: any) {
    this.clicked();
    this.show = !this.show;
    console.log(this.selectedValue);
    this.setChosenAnswer();
  }

  // hier vergelijk je het gekozen antwoord met het antwoord van het object answeroptions
  setChosenAnswer() {
    const chosenAnswerAsArray = this.answerOptionsArray.filter(answerOption => {
      return answerOption.value === this.selectedValue;
    });
    this.chosenAnswer = chosenAnswerAsArray[0];
    console.log(this.chosenAnswer);
    console.log(this.chosenAnswer.correct);
  }



  onItemChange(value) {
    console.log(' Value is : ', value);
  }

  // als je op knop "volgende" drukt wil je de volgende vraag laten zien
  nextQuestion() {
    this.currentQuestion++;
    this.setAnswersToRadiobuttons();
    this.show = true;
    this.showVolgende = false;
    this.buttonClicked = false;
    this.selectedValue = null;
    console.log('witte vlak is nu weg');
  }

}
