import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';

import {UrlService} from './url.service';
import {Quiz} from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {


  private surveyUrl = this.urlService.url + "/";
  quizSubject: BehaviorSubject<Quiz>;


  constructor(private http: HttpClient, private urlService: UrlService) {
    this.quizSubject = new BehaviorSubject(null);
  }

  getInitQuiz(id: number) {
    this.http.get<Quiz>(this.surveyUrl + id).subscribe(quiz => {
      this.quizSubject.next(quiz)
    });
  }

  postnewQuiz(newQuiz: Quiz) {
    return this.http.post<number>(this.surveyUrl, newQuiz,);
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


