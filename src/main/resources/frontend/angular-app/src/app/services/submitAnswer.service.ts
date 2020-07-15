import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SubmitAnswer} from '../model/submitAnswer';
import {AnswerIsCorrect} from '../model/answeriscorrect';
import {UrlService} from './url.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitAnswerService {

  private submitAnswerUrl = this.urlService.url + '/submittedanswers/';

  constructor(private http: HttpClient,
              private urlService: UrlService) {

  }

  postSubmittedAnswer(submitAnswer: SubmitAnswer) {
    return this.http.post<AnswerIsCorrect>(this.submitAnswerUrl, submitAnswer);
  }


}
