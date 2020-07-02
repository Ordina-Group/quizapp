import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Survey} from "../model/survey";
import {Question} from "../model/question";



@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css']
})
export class CreatesurveyComponent implements OnInit {

  userForm = new FormGroup({
    newquestion: new FormControl(''),
    newanswer: new FormControl(''),
  });

  answeroptions: Array<String> = [];
  questionsSet: Array<String> = [];
  show: boolean = false;
  QuestionSetTotal: number;
  answerOptionTotal: number;



  constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
  }

  //add question to array bij buttonclick
  addQuestion(){
    this.QuestionSetTotal = this.questionsSet.push(this.userForm.controls.question.value);
    //hier moet nog een save functie worden aangeroepen
  }


  //add answers to array at buttonclick
  addAnswer(){
    this.show = !this.show;
    this.addQuestion();
  this.answerOptionTotal = this.answeroptions.push(this.userForm.controls.newanswer.value);
    console.log(this.show);
    //hier moet nog een save functie worden aangeroepen
  }


   logFormValue(){
    // vraag: zal ik de nieuwe vragen enzo stopping in een model Question die we al hebben? ->this.nieuweQuestionSet={id:null, questionDescription: this.nieuweQuestion, answerOptions: this.answeroptions}

   }




}
