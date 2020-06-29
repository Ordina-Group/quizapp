import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmittedAnswer } from './submittedanswer';
import { AnswerIsCorrect } from '../answeriscorrect/answeriscorrect';

@Injectable({
  providedIn: 'root'
})
export class SubmittedAnswerService {

  constructor(
    private http: HttpClient
  ) { }
  
  postSubmittedAnswer(submittedAnswer: SubmittedAnswer) {
    return this.http.post<AnswerIsCorrect>('http://localhost:8080/quiz/submittedanswers/', submittedAnswer);
  }

}
