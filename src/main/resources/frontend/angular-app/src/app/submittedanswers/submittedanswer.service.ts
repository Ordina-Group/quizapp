import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmittedAnswer } from './submittedanswer';

@Injectable({
  providedIn: 'root'
})
export class SubmittedAnswerService {

  constructor(
    private http: HttpClient
  ) { }
  postSubmittedAnswer(submittedAnswer: SubmittedAnswer) {
    return this.http.post('localhost:8080/quiz/submittedanswers/submittedAnswer', submittedAnswer);
  }

}
