import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { SubmittedAnswer } from '../model/submittedanswer';
import { AnswerIsCorrect } from '../model/answeriscorrect';
import { NavigationExtras, Router} from "@angular/router";
import { AnswerOption } from '../model/answerOption';
import { Question } from '../model/question';
import { SubmittedAnswerService } from '../services/submitAnswer.service';
import { Quiz } from '../model/quiz';
import { QuizScoreService } from '../services/quiz-score.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private _quizSurvey: Quiz;
  currentQuestion: Question;
  answerOptionsArray: AnswerOption[];
  chosenAnswer: AnswerOption;

  submittedAnswer: SubmittedAnswer;
  answerIsCorrect: AnswerIsCorrect;

  currentQuestionNumber = 0;
  errorMessage = '';

  constructor(private quizService: QuizService,
              private submittedAnswerService: SubmittedAnswerService,
              private quizScoreService: QuizScoreService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.quizService.survey.subscribe(quiz => {
      this.quizSurvey = quiz;
    })
  }
  public get quizSurvey(): Quiz {
    return this._quizSurvey;
  }

  public set quizSurvey(value: Quiz) {
    this._quizSurvey = value;
    if(this._quizSurvey !== undefined && this._quizSurvey !== null){
      this.setAnswersToRadiobuttons();
    }
  }

  // hier wordt de String array"answers" geleegd in de functie,
  // vervolgens wordt de array gelijk /gematched aan de answeroption van deze vraag die uit de database zijn gehaald
  // In de forloop (HTML) wordt dan de answers gematched met dezelfde value waarde (dus antwoord A wordt radiobutton met Antwoord A)
  setAnswersToRadiobuttons() {
    this.currentQuestion = this.quizSurvey.questions.filter(question => {
      return question.number === this.currentQuestionNumber + 1;
    })[0];

    if (this.currentQuestion === undefined) {
      this.router.navigate(['/endpage']);
      return;
    }
    this.answerOptionsArray = this.currentQuestion.answerOptions;

  }


  onFormSubmit() {
    this.submittedAnswer = {surveyid: this.quizSurvey.id , chosenAnswerId: this.chosenAnswer.id , questionid: this.currentQuestion.number, answeredCorrect: false};
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
    this.quizScoreService.processAnswer(this.answerIsCorrect);
  }

}
