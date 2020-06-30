import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private surveyUrl = 'http://localhost:8080/quiz/surveys';

  

  constructor(private http: HttpClient) {
  }

  getSurveys(): Observable<Survey[]> {
    console.log('getSurveys');
    return this.http.get<Survey[]>(this.surveyUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getSurvey(id: number): Observable<Survey | undefined> {
    console.log('getSurvey by id');
    return this.getSurveys()
      .pipe(
        map((surveys: Survey[]) => surveys.find(s => s.id === id))
      );
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

}


