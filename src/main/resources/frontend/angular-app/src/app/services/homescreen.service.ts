import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Survey } from '../model/survey';
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class HomescreenService {

 private url = this.urlService.url + '/surveys/';

  constructor(private http: HttpClient,
              private urlService: UrlService) {
  }

  getSurvey(id: number){
return this.http.get<Survey>(this.url + id);
}

}



