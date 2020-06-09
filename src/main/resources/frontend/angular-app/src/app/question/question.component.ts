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
  currentQuestion = 1;
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


  clicked() {
    this.buttonClicked = !this.buttonClicked;
    this.showVolgende = !this.showVolgende;
  }

  questionForm = new FormGroup({
 //gridradios: new FormControl()
 });


//Als je op submit drukt, laat het programma het witte vlak zien en verdwijnt de knop submit
  onFormSubmit(questionForm: any) {
    console.log(questionForm.value)
    this.clicked();
    this.show = !this.show;

  }

  //als je op knop "volgende" drukt wil je de volgende vraag laten zien
  nextQuestion(){
if(this.currentSurvey.questions[this.currentQuestion].number === 3){
  this.currentQuestion = 1;
  console.log(this.currentQuestion);
}else {
  this.currentQuestion = this.currentSurvey.questions[this.currentQuestion].number + 1;
  console.log(this.currentQuestion);
}
   this.setAnswersToRadiobuttons();

  // this.show = true;
  //  this.showVolgende = false;

   // console.log(this.currentQuestion);
  }
}
//   if(questionForm.value === true){
//       this.buttonClicked = !this.buttonClicked;
//       this.show = !this.show;
//     } else{
//       this.buttonClicked = !this.buttonClicked;
//     }



