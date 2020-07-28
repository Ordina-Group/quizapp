import {Component, OnInit} from '@angular/core';
import {QuizService} from '../services/quiz.service';
import {QuizScoreService} from '../services/quiz-score.service';
import {ScoreEntry} from '../model/scoreEntry';
import {Quiz} from '../model/quiz';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  scoreEntry: ScoreEntry;
  scoreEntries: ScoreEntry[];
  private _currentQuiz: Quiz;

  constructor(private quizService: QuizService, private quizScoreService: QuizScoreService) {
/*    this.scoreEntry =     {
      'userName': quizScoreService.getUserName(),
      'answersCorrect': quizScoreService.getCorrectAnswers(),
      'finishTimestamp': quizScoreService.getFinishTimestamp(),
      'finishTimestampString': quizScoreService.getFinishTimestampString(),
    };*/
//    quizService.addHighScore(this.scoreEntry);
//    this.scoreEntries = getHighScores();



/*      this.quizScoreService.getScores().subscribe((data: ScoreEntry) =>
      this.scoreEntry = {
        userName: data.userName,
        answersCorrect: data.answersCorrect,
        finishTimestamp: data.finishTimestamp,
        finishTimestampString: data.finishTimestampString
      });*/
/*      console.log(this.scoreEntry);
      console.log(this.scoreEntry.userName);
      console.log(this.scoreEntry.answersCorrect);
      console.log(this.scoreEntry.finishTimestamp);
      console.log(this.scoreEntry.finishTimestampString);*/
//    this.surveyScoreService.resetScores();
  }

  ngOnInit(): void {
    this.quizScoreService.getScores(this.quizService.quizSubject.getValue().id).subscribe(scoreEntries => {
      console.log(scoreEntries);
      this.scoreEntries = scoreEntries;
    });
  }
}
