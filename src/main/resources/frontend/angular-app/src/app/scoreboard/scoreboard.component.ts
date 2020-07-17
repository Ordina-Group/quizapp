import {Component, OnInit} from '@angular/core';
import {SurveyService} from '../services/survey.service';
import {SurveyScoreService} from '../services/survey-score.service';
import {ScoreEntry} from '../model/scoreEntry';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scoreEntry: ScoreEntry;
  scoreEntries: ScoreEntry[];

  constructor(private surveyService: SurveyService, private surveyScoreService: SurveyScoreService) {
    this.scoreEntry =     {
      'userName': surveyScoreService.getUserName(),
      'answersCorrect': surveyScoreService.getCorrectAnswers(),
      'finishTimestamp': surveyScoreService.getFinishTimestamp(),
      'finishTimestampString': surveyScoreService.getFinishTimestampString(),
    };
    surveyService.addHighScore(this.scoreEntry);
    this.scoreEntries = surveyService.getHighscores();
//    this.surveyScoreService.resetScores();
  }

  ngOnInit(): void {
  }
}
