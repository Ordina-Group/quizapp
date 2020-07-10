import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Survey } from "../model/survey";
import { Question } from "../model/question";
import { NewSurvey } from "../model/newSurvey"
import { FormArray } from '@angular/forms';
import {AnswerIsCorrect} from "../model/answerIsCorrect";
import {AnswerOptions} from "../model/answerOptions";



@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css']
})
export class CreatesurveyComponent implements OnInit {

  userForm: FormGroup;
  count: number;
  newquestionarray: Question;

  questionsArray: Question[];
  answerarray: AnswerIsCorrect[];

  newSurvey: NewSurvey;
  currentQuestion: number;
  answeriscorrect: AnswerIsCorrect;



  constructor(private formBuilder: FormBuilder) {
    this.questionsArray = [];
    this.answerarray = [];
    this.count = 0;
    this.currentQuestion = 0;
    this.userForm = this.formBuilder.group({
      newsurvey: [''],
        newquestion: [''],
        answeropts: this.formBuilder.array( [])
        });
    }




  ngOnInit() {

  }


  get answeropts() {
  return this.userForm.get('answeropts') as FormArray;
     }

 addAnsweropts(): void {
   this.answeropts.push(this.buildAnsweropts());

  }


    buildAnsweropts(): FormGroup{
      return this.formBuilder.group({
        answer: '',
        iscorrect: 'goed'
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
    console.log(this.buildAnsweropts().get('list.0'));
    this.saveQuestion();
    this.userForm.reset();
  }

  saveQuestion() {
    console.log();
  //  let item1 = this.answeropts.at(0).value;
   // console.log(item1);

 // this.answeriscorrect ={id:null, answerExplanation:this.answeropts.value, isCorrect:this.iscorrect.value, answerOptionId: this.count}
  //this.answerarray.push(this.answeriscorrect);

  //  this.answeroptionsarray = {id: null, answerOptionId: this.count, answerExplanation, isCorrect: this.iscorrect.value}
   // this.answerarray.push(this.answeroptionsarray);
    //this.newquestionarray= {questionDescription: this.newquestion.value, answerOptions: this.answerarray, iscorrect: this.iscorrect.value, number: this.count };
   // this.questionsArray.push(this.newquestionarray);
 //   this.newSurvey = { surveydescription: this.newsurvey.value, question: this.questionsArray }

    console.log(this.answeriscorrect);

  }

  onSubmit() {
    this.saveQuestion();
    console.log(this.newSurvey);

  }

}

