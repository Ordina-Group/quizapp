import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Survey} from "../model/survey";
import {Question} from "../model/question";
import {NewSurvey} from "../model/newSurvey"
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
    newsurvey: [''],
    answeropts: this.formBuilder.array([this.formBuilder.control('')])
  });

  newQuestion: object;
  questionsArray: object[] = [];
  newSurvey: NewSurvey;
currentQuestion = 0;


 constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(){

  }



  get answeropts(){
    return this.userForm.get('answeropts') as FormArray;

  }

  get newquestion(){
    return this.userForm.get('newquestion');

  }

  get newsurvey(){
    return this.userForm.get('newsurvey');

  }


  addAnsweropts() {
    this.answeropts.push(this.formBuilder.control(''));
  }

  deleteAnsweropts() {
   this.answeropts.removeAt(this.answeropts.length - 1);
  }



  nextQuestion(){
   this.saveQuestion();
  this.userForm.reset();
  }

  saveQuestion(){
this.newQuestion = {questionDescription: this.newquestion.value, answerOptions: this.answeropts.value};
this.questionsArray.push(this.newQuestion);
    console.log(this.questionsArray);

  }

  onSubmit(){
   this.saveQuestion();
    this.newSurvey = {surveydescription: this.newsurvey.value, question: this.questionsArray};
    console.log(this.newSurvey);

 }

  }

