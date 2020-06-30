import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import {FormGroup } from '@angular/forms';
import { SubmittedAnswer } from '../model/submittedanswer';
import { AnswerIsCorrect } from '../model/answeriscorrect';
import { NavigationExtras, Router} from "@angular/router";
import { AnswerOptions } from '../model/answerOptions';
import { Question } from '../model/question';
import { SubmittedAnswerService } from '../services/submitAnswer.service';
import { Survey } from '../model/survey';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public _currentSurvey: Survey;
  currentQuestionObject: Question;
  answerOptionsArray: AnswerOptions[];
  chosenAnswer: AnswerOptions;

  selectedValue: number = 0;
  currentQuestion = 0;
  correctAnswer = 0;
  inCorrectAnswer =0;
  buttonClicked = false;
  show = true;
  showVolgende = false;
  hasAnswer = false;
  errorMessage = '';
  submittedAnswer: SubmittedAnswer;
  answerIsCorrect: AnswerIsCorrect;
  questionForm = new FormGroup({
    // gridradios: new FormControl()
  });



  ngOnInit(): void {
    this.surveyService.surveys.subscribe(surveys => {
      //picks the first survey that is not null
      this.currentSurvey = surveys.find(survey => survey.id != null);
    })
  }

  constructor(private surveyService: SurveyService,
              private submittedAnswerService: SubmittedAnswerService,
              private router: Router) {
  }

  public get currentSurvey(): Survey {
    return this._currentSurvey;
  }

  public set currentSurvey(value: Survey) {
    this._currentSurvey = value;
    if(this._currentSurvey != undefined){
      this.setAnswersToRadiobuttons();
    }
  }

  // hier wordt de String array"answers" geleegd in de functie,
  // vervolgens wordt de array gelijk /gematched aan de answeroption van deze vraag die uit de database zijn gehaald
  // In de forloop (HTML) wordt dan de answers gematched met dezelfde value waarde (dus antwoord A wordt radiobutton met Antwoord A)
  setAnswersToRadiobuttons() {
    this.currentQuestionObject = this.currentSurvey.questions.filter(question => {
      return question.number === this.currentQuestion + 1;
    })[0];
    // this.currentQuestionObject = this._currentSurvey.questions.sort((question1, question2) => question1.number - question2.number)[0]
    if (this.currentQuestionObject === undefined) {
      // hier wil je iets doen om naar een eindpagina te gaan.
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "correctAnswer": this.correctAnswer,
          "incorrectAnswer": this.inCorrectAnswer
        }
      };
      this.router.navigate(['/endpage'], navigationExtras);
      return;
    }
    this.answerOptionsArray = this.currentQuestionObject.answerOptions;

  }

  // deze functie laat het witte vlak met uitleg zien en reset de buttonclicked gelijk
  // showvolgende knop wordt getoond
  clicked() {
    if (!this.selectedValue) {
      this.hasAnswer = !this.hasAnswer;
      console.log("geen antwoord ingegeven")
      this.onFormSubmit(this.questionForm);
    } else {
      this.buttonClicked = !this.buttonClicked;
      this.showVolgende = !this.showVolgende;
      this.hasAnswer = false;
    }
  }


  // Als je op submit drukt, laat het programma het witte vlak zien en verdwijnt de knop submit
  // (dit gebeurd met show) en clicked() functie wordt aangeroepen.
  // Tevens wordt het antwoord gekoppeld met het juiste antwoord dmv aanroepen setchosenanswer functie
  onFormSubmit(questionForm: any) {
    this.clicked();
    this.show = !this.show;
    console.log(this.selectedValue);
    this.submittedAnswer = new SubmittedAnswer();
    this.submittedAnswer.chosenAnswerId = this.selectedValue 
    this.submittedAnswerService.postSubmittedAnswer(this.submittedAnswer).subscribe(answerIsCorrect => {
      console.log("answerIsCorrect: " + answerIsCorrect)
      this.answerIsCorrect = answerIsCorrect;
    });
  }



  // // hier vergelijk je het gekozen antwoord met het antwoord van het object answeroptions
  // setChosenAnswer() {
  //   const chosenAnswerAsArray = this.answerOptionsArray.filter(answerOption => {
  //     return answerOption.value === this.selectedValue;
  //   });
  //   this.chosenAnswer = chosenAnswerAsArray[0];
  //   console.log(this.chosenAnswer);
  //   console.log(this.chosenAnswer.correct);
  // }



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

  //hier worden alle goede en foute antwoorden bijgehouden
  saveAnswers(){
    if (true === true){
      this.correctAnswer++;
      console.log(this.correctAnswer);
      return this.correctAnswer;
    }else{
      this.inCorrectAnswer++;
      console.log(this.inCorrectAnswer);
      return this.inCorrectAnswer;
    }


  }

}
