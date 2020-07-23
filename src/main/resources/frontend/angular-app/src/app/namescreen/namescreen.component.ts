import {Component, OnInit} from '@angular/core';
import {QuizScoreService} from '../services/quiz-score.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-namescreen',
  templateUrl: './namescreen.component.html',
  styleUrls: ['./namescreen.component.css']
})
export class NamescreenComponent implements OnInit {

  userName: string;

  constructor(private quizScoreService: QuizScoreService,
              private router: Router) {
  }

  onNaamSubmit() {
    console.log('name entered: ' + this.userName);
    this.quizScoreService.setUserName(this.userName);
    this.quizScoreService.resetScores();
    this.router.navigate(['/question']);
  }

  ngOnInit(): void {
  }
}
