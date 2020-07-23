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

  chosenQuiz: number;

  constructor(private quizService: QuizService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onOpenQuizSubmit() {
    console.log("chosen quiz: " + this.chosenQuiz)
    this.quizService.quizSubject.subscribe(newquiz => {
      if (newquiz!=null){
      this.router.navigate(['/namescreen'])
      }
      console.log(newquiz)
    })
    this.quizService.getInitQuiz(this.chosenQuiz);
  }


}
