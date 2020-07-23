import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { UrlService } from './url.service';
import { Quiz } from '../model/quiz';
import { ScoreEntry } from '../model/scoreEntry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private surveyUrl = this.urlService.url + '/surveys/';

  private handleError: HandleError;
  survey: BehaviorSubject<Quiz>;
  scoreEntries: BehaviorSubject<ScoreEntry[]>;

  constructor(  private http: HttpClient,
                private urlService: UrlService) {
    this.survey = new BehaviorSubject(null);
    this.scoreEntries = new BehaviorSubject(null);
  }

  getInitSurveys(id: number) {
    this.http.get<Quiz>(this.surveyUrl + id).subscribe(survey => {
      this.survey.next(survey);
    });
  }

  public get quizId() {return this.survey.getValue().id; }

/*  public getHighscores() {
    return this.scoreEntries;
  }*/



/*
  private handleError(err: HttpErrorResponse) {
  }
*/

/*  public addHighScore(scoreEntry: ScoreEntry) {
    this.scoreEntries.push(scoreEntry);
    // after adding a new high score, the table is immediately again sorted.
    this.scoreEntries.sort((a, b) => {
      if (a.answersCorrect < b.answersCorrect) {return 1; }
      if (a.answersCorrect > b.answersCorrect) {return -1; }
      if (a.finishTimestamp < b.finishTimestamp) {return 1; }
      if (a.finishTimestamp > b.finishTimestamp) {return -1; }
      return 0;
    });
  }*/

/*
  public postScore(scoreEntry: ScoreEntry): Observable<ScoreEntry> {
    return this.http.post<ScoreEntry>
    (this.scoreUrl, scoreEntry, httpOptions)
      .pipe(
//        catchError(this.handleError
//        ('addScore', scoreEntry)
          );
  }
*/

}


