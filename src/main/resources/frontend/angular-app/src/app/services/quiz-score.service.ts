import { Injectable } from '@angular/core';
import { AnswerIsCorrect } from '../model/answeriscorrect';

@Injectable({
  providedIn: 'root'
})
export class QuizScoreService {

  private correctAnswer = 0;
  private inCorrectAnswer = 0;

  constructor() { }


  public processAnswer(answerIsCorrect: AnswerIsCorrect){
    answerIsCorrect?.isCorrect === true ? this.correctAnswer++ : this.inCorrectAnswer++;
  }

  public getCorrectAnswers(){
    return this.correctAnswer;
  }

  public getIncorrectAnswers(){
    return this.inCorrectAnswer;
  }

  public resetScores(){
    this.correctAnswer = 0;
    this.inCorrectAnswer = 0;
  }



}
