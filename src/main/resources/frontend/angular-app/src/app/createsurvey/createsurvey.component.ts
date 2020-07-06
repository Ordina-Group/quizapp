import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Survey} from "../model/survey";
import {Question} from "../model/question";
import { FormArray } from '@angular/forms';
import { CreateSurveyService} from '../services/createSurvey.service';


@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css']
})
export class CreatesurveyComponent implements OnInit {

  userForm = this.formBuilder.group({
    newquestion: [''],
    answeropts: this.formBuilder.array([this.formBuilder.control('')])
  });

  newQuestion: Question;
currentQuestion = 0;


 constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(){

  }



  get answeropts(){
    return this.userForm.get('answeropts') as FormArray;

  }

  get newquestion(){
    return this.userForm.get('newquestion') as FormArray;

  }

  addAnsweropts() {
    this.answeropts.push(this.formBuilder.control(''));
  }

  deleteAnsweropts() {
   this.answeropts.removeAt(this.answeropts.length - 1);
  }



  nextQuestion(){
   this.saveQuestion();
   this.currentQuestion++;
  this.userForm.reset();
  }

  saveQuestion(){
this.newQuestion = {questionDescription: this.newquestion.value, answerOptions: this.answeropts.value, number: null};
console.log(this.newQuestion);

  }
}
