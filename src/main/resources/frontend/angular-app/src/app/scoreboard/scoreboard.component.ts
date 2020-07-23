import {Component, OnInit} from '@angular/core';
import {QuizService} from '../services/quiz.service';
import {QuizScoreService} from '../services/quiz-score.service';
import {ScoreEntry} from '../model/scoreEntry';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scoreEntry: ScoreEntry;
  scoreEntries: ScoreEntry[];

  constructor(private quizService: QuizService, private quizScoreService: QuizScoreService) {
    this.scoreEntry =     {
      'userName': quizScoreService.getUserName(),
      'answersCorrect': quizScoreService.getCorrectAnswers(),
      'finishTimestamp': quizScoreService.getFinishTimestamp(),
      'finishTimestampString': quizScoreService.getFinishTimestampString(),
    };
    quizService.addHighScore(this.scoreEntry);
    this.scoreEntries = quizService.getHighscores();
//    this.surveyScoreService.resetScores();
  }

  ngOnInit(): void {
  }
}
