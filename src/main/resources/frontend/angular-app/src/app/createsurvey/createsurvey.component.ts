import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Survey } from "../model/survey";
import { Question } from "../model/question";
import { NewSurvey } from "../model/newSurvey"
import { FormArray } from '@angular/forms';
import {AnswerIsCorrect} from "../model/answerIsCorrect";
import {AnswerOptions} from "../model/answerOptions";
import get = Reflect.get;



@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css']
})
export class CreatesurveyComponent implements OnInit {

  userForm: FormGroup;
  count: number;
  newquestionarray: Question;
  answer: string;
  questionsArray: Question[];
  answerarray: AnswerOptions[];
  newSurvey: NewSurvey;
  currentQuestion: number;
  answersoptionsarray: AnswerOptions;
  private buildanswer: FormGroup;



  constructor(private formBuilder: FormBuilder) {
    this.questionsArray = [];
    this.answer= '';
    this.answerarray = [];
    this.count = 0;
    this.currentQuestion = 0;
  }




  ngOnInit() {
    this.userForm = this.formBuilder.group({
      newsurvey: [''],
      newquestion: [''],
      answeropts: this.formBuilder.array( [])
    });
this.addAnsweropts();
  }


  get answeropts() {
    return this.userForm.get('answeropts') as FormArray;
  }

  addAnsweropts(): void {
    this.answeropts.push(this.buildAnsweropts());

  }


  buildAnsweropts(): FormGroup{
    return this.buildanswer = this.formBuilder.group({
      answer: '',
      iscorrect: [true]
    })



    }





//  deleteAnsweropts() {
  //   (this.userForm.get('question').get('answeropts') as FormArray).removeAt(this.answeropts.length - 1);
  // }


  get newquestion() {
    return this.userForm.get('newquestion');
  }


  get newsurvey() {
    return this.userForm.get('newsurvey');

  }




  nextQuestion() {

    console.log(this.answeropts.value);
    console.log(this.answeropts.value[0].answer);
    console.log(this.buildanswer.controls['answer'].value);
    this.saveQuestion();
    this.userForm.reset();
  }

  saveQuestion() {
    this.answersoptionsarray = {id: null, number: null, value: this.answeropts.value[0].answer, correctanswer: this.answeropts.value[0].iscorrect}
    this.answerarray.push(this.answersoptionsarray);
    //  let item1 = this.answeropts.at(0).value;
    // console.log(item1);

    // this.answeriscorrect ={id:null, answerExplanation:this.answeropts.value, isCorrect:this.iscorrect.value, answerOptionId: this.count}
    //this.answerarray.push(this.answeriscorrect);

    //  this.answeroptionsarray = {id: null, answerOptionId: this.count, answerExplanation, isCorrect: this.iscorrect.value}
    // this.answerarray.push(this.answeroptionsarray);
    //this.newquestionarray= {questionDescription: this.newquestion.value, answerOptions: this.answerarray, iscorrect: this.iscorrect.value, number: this.count };
    // this.questionsArray.push(this.newquestionarray);
    //   this.newSurvey = { surveydescription: this.newsurvey.value, question: this.questionsArray }

    console.log(this.answerarray);

  }

  onSubmit() {
    this.saveQuestion();
    console.log(this.newSurvey);

  }

}
