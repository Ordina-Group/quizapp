import {Component, OnInit} from '@angular/core';
import {Survey} from "../model/survey";
import {SurveyService} from "../services/survey.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  chosenSurvey: number;

  constructor(private surveyService: SurveyService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onOpenSurveySubmit() {
    console.log("chosen survey: " + this.chosenSurvey)
    this.surveyService.getInitSurveys(this.chosenSurvey);
    this.router.navigate(['/question']);
  }


}
