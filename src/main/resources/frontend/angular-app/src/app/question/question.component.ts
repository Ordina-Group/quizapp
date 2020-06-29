import { Component, OnInit } from '@angular/core';
import { AnswerOptions, Question, Survey } from '../surveys/survey';
import { SurveyService } from '../surveys/survey.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
<<<<<<< HEAD
import { SubmittedAnswerService } from '../submittedanswers/submittedanswer.service';
import { SubmittedAnswer } from '../submittedanswers/submittedanswer';
import { AnswerIsCorrect } from '../answeriscorrect/answeriscorrect';
=======
import {ActivatedRoute, NavigationExtras, Router, RouterModule} from "@angular/router";
import {any} from "codelyzer/util/function";

>>>>>>> 525db19cae7e6498b6c454e2cc1bdc55519240ee

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  answerOptionsArray: AnswerOptions[];
  chosenAnswer: AnswerOptions;
  selectedValue: number = 0;
  currentQuestion = 0;
  correctAnswer = 0;
  inCorrectAnswer =0;
  currentQuestionObject: Question;
  buttonClicked = false;
  show = true;
  showVolgende = false;
  hasAnswer = false;
  public _currentSurvey: Survey;
  private correct: boolean;
  errorMessage = '';
  submittedAnswer: SubmittedAnswer;
  answerIsCorrect: AnswerIsCorrect;
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
    private surveyService: SurveyService,
    private submittedAnswerService: SubmittedAnswerService) {
    console.log('constructor van Question');
    console.log('constructor van Submittedanswer');
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
    console.log(this.currentSurvey)
    this.currentQuestionObject = this.currentSurvey.questions.filter(question => {
      return question.number === this.currentQuestion + 1;
    })[0];
    if (this.currentQuestionObject === undefined) {
      console.log('geen volgende vraag!');
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
    if (this.chosenAnswer.correct === true){
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
