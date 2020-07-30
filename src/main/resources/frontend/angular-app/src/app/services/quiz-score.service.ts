import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from './url.service';
import {BehaviorSubject} from 'rxjs';
import {ScoreEntry} from '../model/scoreEntry';
import {AnswerOption} from "../model/answerOption";

@Injectable({
  providedIn: 'root'
})
export class QuizScoreService {

  private userName = '';
  private correctAnswer = 0;
  private inCorrectAnswer = 0;
  private finishTimestamp: Date;
  private finishTimestampString = '';
  private scoresUrl = this.urlService.url + '/scores/';


  constructor(  private http: HttpClient,
                private urlService: UrlService) {
  }

  public getUserName() {
    return this.userName;
  }

  public setUserName(userName: string) {
    this.userName = userName;
  }

  public processAnswer(answerOption: AnswerOption){
    answerOption?.isCorrect === true ? this.correctAnswer++ : this.inCorrectAnswer++;
  }

  getScores(id: number) {
    return this.http.get<ScoreEntry[]>(this.scoresUrl + id); }

  postScore(scoreEntry: ScoreEntry, id: number) {
    this.http.post(this.scoresUrl + id, scoreEntry).subscribe(data => {console.log(data); }); }

  public getCorrectAnswers(){
    return this.correctAnswer;
  }

  public getIncorrectAnswers() {
    return this.inCorrectAnswer;
  }

  public getFinishTimestamp(): Date {
    return this.finishTimestamp;
  }

  public setFinishTimestamp(value: Date) {
    this.finishTimestamp = value;
  }

  public getFinishTimestampString(): string {
    return this.finishTimestampString;
  }

  public setFinishTimestampString(value: string) {
    this.finishTimestampString = value;
  }

  public resetScores(){
    this.correctAnswer = 0;
    this.inCorrectAnswer = 0;
  }
}
