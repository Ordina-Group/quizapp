import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { UrlService } from './url.service';
import { Survey } from '../model/survey';
import {ScoreEntry} from '../model/scoreEntry';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private surveyUrl = this.urlService.url + '/surveys/';
  survey: BehaviorSubject<Survey>;
  scoreEntries: ScoreEntry[] = [];

/*  scoreEntries: ScoreEntry[] = [{
      'userName': 'Player 1',
      'answersCorrect': 1,
      'finishTimestamp': new Date(),
      'finishTimestampString': '12/07/2020 14:28:23'
    },
    {
      'userName': 'Player 2',
      'answersCorrect': 2,
      'finishTimestamp': new Date(),
      'finishTimestampString': '13/07/2020 18:50:36'
    },
    {
      'userName': 'Player 3',
      'answersCorrect': 3,
      'finishTimestamp': new Date(),
      'finishTimestampString': '14/07/2020 13:03:14'
    }
  ];*/

  constructor(  private http: HttpClient,
                private urlService: UrlService) {
    this.survey = new BehaviorSubject(null);
  }

  getInitSurveys(id: number) {
    this.http.get<Survey>(this.surveyUrl + id).subscribe(survey => {
      this.survey.next(survey)
    });
  }

  public getHighscores() {
    return this.scoreEntries;
  }

  public addHighScore(scoreEntry: ScoreEntry) {
    this.scoreEntries.push(scoreEntry);
    // after adding a new high score, the table is immediately again sorted.
    this.scoreEntries.sort((a, b) => {
      if (a.answersCorrect < b.answersCorrect) {return 1; }
      if (a.answersCorrect > b.answersCorrect) {return -1; }
      if (a.finishTimestamp < b.finishTimestamp) {return 1; }
      if (a.finishTimestamp > b.finishTimestamp) {return -1; }
      return 0;
    });
  }

/*  public sortHighScores(scoreEntries: ScoreEntry[]) {
    return this.scoreEntries.sort((a, b) => {
      if (a.answersCorrect > b.answersCorrect) {return 1; }
      if (a.answersCorrect < b.answersCorrect) {return -1; }
      return 0;
    });
  }*/

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
