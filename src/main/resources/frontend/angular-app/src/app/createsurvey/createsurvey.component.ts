import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Survey} from "../model/survey";
import {Question} from "../model/question";
import {NewSurvey} from "../model/newSurvey"
import { FormArray } from '@angular/forms';



@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css']
})
export class CreatesurveyComponent implements OnInit {

  userForm = this.formBuilder.group({
    newsurvey: [''],
    question: this.formBuilder.group({
      newquestion: [''],
      answeropts: this.formBuilder.array([this.formBuilder.control('')]),
      iscorrect: ['']
  }),
  });
  count: number = 0;
  newQuestion: Question;
  questionsArray: Question[] = [];
  newSurvey: NewSurvey;
currentQuestion = 0;


 constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(){


  }




  get newquestion(){
    return this.userForm.get('newquestion');

  }

  get newsurvey(){
    return this.userForm.get('newsurvey');

  }




  get iscorrect(){
    return this.userForm.get('iscorrect');

  }

  deleteAnsweropts() {
   this.answeropts.removeAt(this.answeropts.length - 1);

  }

  addAnsweropts() {
    this.answeropts.push(this.formBuilder.control(''));
  }

  get answeropts(){
    return this.userForm.get('answeropts') as FormArray;

  }



  nextQuestion(){
   this.saveQuestion();
  this.userForm.reset();
  }

  saveQuestion(){
this.newQuestion = {questionDescription: this.newquestion.value, answerOptions: this.answeropts.value, iscorrect: this.iscorrect.value, number: this.count};
this.questionsArray.push(this.newQuestion);
this.newSurvey = {surveydescription: this.newsurvey.value, question: this.questionsArray}
    console.log(this.questionsArray);

  }

  onSubmit(){
   this.saveQuestion();
    console.log(this.newSurvey);

 }

  }

