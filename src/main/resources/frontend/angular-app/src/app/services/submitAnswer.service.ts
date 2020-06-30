import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmittedAnswer } from '../model/submittedanswer';
import { AnswerIsCorrect } from '../model/answeriscorrect';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class SubmittedAnswerService {

  private surveyUrl = this.urlService.url + '/submittedanswers/';

  constructor(private http: HttpClient, 
              private urlService: UrlService) {}
  
  postSubmittedAnswer(submittedAnswer: SubmittedAnswer) {
    return this.http.post<AnswerIsCorrect>(this.surveyUrl, submittedAnswer);
  }

}
