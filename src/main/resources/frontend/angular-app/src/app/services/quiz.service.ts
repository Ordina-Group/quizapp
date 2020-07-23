import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { UrlService } from './url.service';
import { Quiz } from '../model/quiz';
import { ScoreEntry } from '../model/scoreEntry';

@Injectable({
  providedIn: 'root'
})
export class QuizService {


  private surveyUrl = this.urlService.url + "/";
  quizSubject: BehaviorSubject<Quiz>;
  scoreEntries: ScoreEntry[] = [];


  constructor(private http: HttpClient, private urlService: UrlService) {
    this.quizSubject = new BehaviorSubject(null);
  }

  getInitQuiz(id: number) {
    this.http.get<Quiz>(this.surveyUrl + id).subscribe(quiz => {
      this.quizSubject.next(quiz)
    });
  }

  postnewQuiz(newQuiz: Quiz) {
    return this.http.post<number>(this.surveyUrl, newQuiz);
  }

  public get quizId() {return this.survey.getValue().id; }

/*  public getHighscores() {
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
*/


