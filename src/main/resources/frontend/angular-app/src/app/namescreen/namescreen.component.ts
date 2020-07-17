import {Component, OnInit} from '@angular/core';
import {SurveyScoreService} from '../services/survey-score.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-namescreen',
  templateUrl: './namescreen.component.html',
  styleUrls: ['./namescreen.component.css']
})
export class NamescreenComponent implements OnInit {

  userName: string;

  constructor(private surveyScoreService: SurveyScoreService,
              private router: Router) {
  }

  onNaamSubmit() {
    console.log('name entered: ' + this.userName);
    this.surveyScoreService.setUserName(this.userName);
    this.surveyScoreService.resetScores();
    this.router.navigate(['/question']);
  }

  ngOnInit(): void {
  }
}
