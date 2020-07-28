import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuizScoreService } from '../services/quiz-score.service';
import {QuizService} from '../services/quiz.service';
import {ScoreEntry} from '../model/scoreEntry';
import {Quiz} from '../model/quiz';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndpageComponent implements OnInit {
  correctAnswer: number;
  incorrectAnswer: number;
  scoreEntry: ScoreEntry;
  private _currentQuiz: Quiz;

  constructor(private quizService: QuizService, private quizScoreService: QuizScoreService) {
  }

  ngOnInit(): void {
    this.correctAnswer = this.quizScoreService.getCorrectAnswers();
    this.incorrectAnswer = this.quizScoreService.getIncorrectAnswers();

    this.scoreEntry =     {
      userName: this.quizScoreService.getUserName(),
      answersCorrect: this.quizScoreService.getCorrectAnswers(),
      finishTimestamp: this.quizScoreService.getFinishTimestamp(),
      finishTimestampString: this.quizScoreService.getFinishTimestampString(),
    };

    console.log(this.scoreEntry + ' ' + this.quizService.quizSubject.getValue().id);
    this.quizScoreService.postScore(this.scoreEntry, this.quizService.quizSubject.getValue().id);

  }

}
