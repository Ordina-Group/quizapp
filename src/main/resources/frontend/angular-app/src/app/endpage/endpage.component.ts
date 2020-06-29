import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndpageComponent implements OnInit {
  correctAnswer: string;
  incorrectAnswer: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.correctAnswer = params["correctAnswer"];
      this.incorrectAnswer = params["incorrectAnswer"];
    });
  }

  ngOnInit(): void {
  }

}
