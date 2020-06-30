import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { UrlService } from './url.service';
import { Survey } from '../model/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private surveyUrl = this.urlService.url + '/surveys/';
  surveys: BehaviorSubject<Survey[]>;

  constructor(private http: HttpClient, private urlService: UrlService) {
    this.surveys = new BehaviorSubject([]);
    this.getInitSurveys();
  }

  private getInitSurveys() {
    this.http.get<Survey[]>(this.surveyUrl).subscribe(surveys => {
      this.surveys.next(surveys)
      // console.log('All: ' + JSON.stringify(surveys))
    });
  }



  getSurvey(id: number) {
    console.log('getSurvey by id');
    return this.surveys.value.find(survey => survey.id === id)
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


