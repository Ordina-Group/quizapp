import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { SubmittedAnswer } from '../model/submittedanswer';
import { AnswerIsCorrect } from '../model/answeriscorrect';
import { NavigationExtras, Router} from "@angular/router";
import { AnswerOptions } from '../model/answerOptions';
import { Question } from '../model/question';
import { SubmittedAnswerService } from '../services/submitAnswer.service';
import { Survey } from '../model/survey';
import { SurveyScoreService } from '../services/survey-score.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public _currentSurvey: Survey;
  currentQuestion: Question;
  answerOptionsArray: AnswerOptions[];
  chosenAnswer: AnswerOptions;

  submittedAnswer: SubmittedAnswer;
  answerIsCorrect: AnswerIsCorrect;

  currentQuestionNumber = 0;
  errorMessage = '';
  

  ngOnInit(): void {
    this.surveyService.survey.subscribe(survey => {
      this.currentSurvey = survey;
    })
  }

  constructor(private surveyService: SurveyService,
              private submittedAnswerService: SubmittedAnswerService,
              private surveyScoreService: SurveyScoreService,
              private router: Router) {
  }

  public get currentSurvey(): Survey {
    return this._currentSurvey;
  }

  public set currentSurvey(value: Survey) {
    this._currentSurvey = value;
    console.log("survey is: " + JSON.stringify(this._currentSurvey))
    if(this._currentSurvey !== undefined && this._currentSurvey !== null){
      console.log("setting buttons")
      console.log(this._currentSurvey.questions)
      console.log(this._currentSurvey === undefined || this._currentSurvey === null)
      console.log(this._currentSurvey)
      this.setAnswersToRadiobuttons();
    }
  }

  // hier wordt de String array"answers" geleegd in de functie,
  // vervolgens wordt de array gelijk /gematched aan de answeroption van deze vraag die uit de database zijn gehaald
  // In de forloop (HTML) wordt dan de answers gematched met dezelfde value waarde (dus antwoord A wordt radiobutton met Antwoord A)
  setAnswersToRadiobuttons() {
    this.currentQuestion = this.currentSurvey.questions.filter(question => {
      return question.number === this.currentQuestionNumber + 1;
    })[0];
    
    if (this.currentQuestion === undefined) {
      this.router.navigate(['/endpage']);
      return;
    }
    this.answerOptionsArray = this.currentQuestion.answerOptions;

  }

  // Als je op submit drukt, laat het programma het witte vlak zien en verdwijnt de knop submit
  // (dit gebeurd met show) en clicked() functie wordt aangeroepen.
  // Tevens wordt het antwoord gekoppeld met het juiste antwoord dmv aanroepen setchosenanswer functie
  onFormSubmit() {
    this.submittedAnswer = {surveyid: this.currentSurvey.id , chosenAnswerId: this.chosenAnswer.id , questionid: this.currentQuestion.number, answeredCorrect: false};
    this.submittedAnswerService.postSubmittedAnswer(this.submittedAnswer).subscribe(answerIsCorrect => {
      this.answerIsCorrect = answerIsCorrect;
      this.saveAnswers();
    })
  }

  // als je op knop "volgende" drukt wil je de volgende vraag laten zien
  nextQuestion() {
    this.currentQuestionNumber++;
    this.setAnswersToRadiobuttons();
    this.answerIsCorrect = null;
    this.chosenAnswer = null;
  }

  //hier worden alle goede en foute antwoorden bijgehouden
  saveAnswers(){
    this.surveyScoreService.processAnswer(this.answerIsCorrect);
  }

}
