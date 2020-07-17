import {Component, OnInit} from '@angular/core';
import {Quiz} from "../model/quiz";
import {QuizService} from "../services/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  chosenSurvey: number;

  constructor(private surveyService: QuizService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onOpenSurveySubmit() {
    console.log("chosen survey: " + this.chosenSurvey);
    this.surveyService.getInitSurveys(this.chosenSurvey);
    this.router.navigate(['/namescreen']);
  }


}
