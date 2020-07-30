import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmitAnswer } from '../model/submitAnswer';
import { UrlService } from './url.service';
import { AnswerOption } from "../model/answerOption";

@Injectable({
  providedIn: 'root'
})
export class SubmitAnswerService {

  private submitAnswerUrl = this.urlService.url + '/submittedanswers/';

  constructor(private http: HttpClient,
              private urlService: UrlService) {

  }

  postSubmittedAnswer(submitAnswer: SubmitAnswer) {
    this.http.post(this.submitAnswerUrl, submitAnswer);
  }


}
