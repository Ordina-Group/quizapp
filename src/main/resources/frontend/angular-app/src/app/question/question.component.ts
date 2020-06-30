import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
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

  submittedAnswer: SubmittedAnswer;
  answerIsCorrect: AnswerIsCorrect;

  currentQuestion = 0;
  correctAnswer = 0;
  inCorrectAnswer = 0;
  errorMessage = '';
  

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

  // Als je op submit drukt, laat het programma het witte vlak zien en verdwijnt de knop submit
  // (dit gebeurd met show) en clicked() functie wordt aangeroepen.
  // Tevens wordt het antwoord gekoppeld met het juiste antwoord dmv aanroepen setchosenanswer functie
  onFormSubmit() {
    this.submittedAnswer = {surveyid: this.currentSurvey.id , chosenAnswerId: this.chosenAnswer.id , questionid: this.currentQuestionObject.number, answeredCorrect: false};
    this.submittedAnswerService.postSubmittedAnswer(this.submittedAnswer).subscribe(answerIsCorrect => {
      this.answerIsCorrect = answerIsCorrect;
      this.saveAnswers();
    })
  }

  // als je op knop "volgende" drukt wil je de volgende vraag laten zien
  nextQuestion() {
    this.currentQuestion++;
    this.setAnswersToRadiobuttons();
    this.answerIsCorrect = null;
    this.chosenAnswer = null;
  }

  //hier worden alle goede en foute antwoorden bijgehouden
  saveAnswers(){
    this.answerIsCorrect?.isCorrect === true ? this.correctAnswer++ : this.inCorrectAnswer++;
  }

}
