import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Quiz} from "../model/quiz";
import {Question} from "../model/question";
import {FormArray} from '@angular/forms';

import {AnswerOption} from "../model/answerOption";
import { QuizService } from '../services/quiz.service';
import {filter} from "rxjs/operators";



@Component({
  selector: 'app-createquiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  quiz: Quiz;
  quizForm: FormGroup;
  count: number;
  newQuiz: Quiz;
  currentQuestion: number;
  lockQuizName: boolean;
  show: string;
  currentQuestionsArray: Array<number>;
  stored: Array<any>;
  filteredItem: Question;


  constructor(private formBuilder: FormBuilder, private quizService: QuizService) {
    this.count = 0;
    this.currentQuestionsArray = [];
    this.lockQuizName = false;
    this.show = '';
    this.newQuiz = {questions: []} as Quiz;
    this.stored = [];



    this.quizForm = this.formBuilder.group({
      quizName: [''],
      question: [''],
      answerOptions: this.formBuilder.array([]),
      currentQuestionsArray:  this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.addAnswerOption();
  }

  get answerOptions(): FormArray {
    return this.quizForm.get('answerOptions') as FormArray;
  }

  addAnswerOption(): void {
    this.answerOptions.push(this.newAnswerOption());
  }

  deleteAnswerOption() {
    (this.quizForm.get('answerOptions') as FormArray).removeAt(this.answerOptions.length - 1);
  }

  get quizName(): string {
    return this.quizForm.get('quizName').value
  }

  private newAnswerOption(): FormGroup {
    return this.formBuilder.group({
      answer: '',
      iscorrect: 'true'
    })
  }


  nextQuestion() {
    this.saveQuestion();
    this.lockQuizName = true;
    this.quizForm.get('question').reset();
    this.quizForm.get('answerOptions').reset();
  }

  saveQuestion() {
    let quizname = this.quizName;

    let questionDescription = this.quizForm.get('question').value;
    let question = {answerOptions: []} as Question;
    this.answerOptions.controls.forEach(control => {
      let answerOption = this.toAnswerOption(control)
      question.answerOptions.push(answerOption)
    })
    question.questionDescription = questionDescription;

    this.newQuiz.quizDescription = quizname;
    this.newQuiz.questions.push(question);

    this.count++;
    console.log('nu is count' + this.count);
    question.id = this.count;

    let q ={id: this.count, qdescription: questionDescription}


    this.stored.push(q);

    //this.stored.push(this.count, questionDescription);
    localStorage.setItem('questions', JSON.stringify(this.stored));
    let myItem = JSON.parse(localStorage.getItem('questions'));

    console.log(myItem);

this.checkQuestion();
  }


  //deze functie zorgt ervoor dat de button met vraagnummer boven de vraag verschijnt
  checkQuestion(){
    this.currentQuestionsArray.push(this.count)
  }


  //Onclick functie logt dus de juiste vraagomschrijving in de F12 console als je op de button klikt boven die boven de vraag verschijnt.
  // Volgende stap is om dit nu te laten zien in het inputfield zodat je dit aan kan passen.
  onClick(questionNumber){
    console.log(questionNumber);
   let myFilter = JSON.parse(localStorage.getItem('questions')).filter(questions =>questions.id === questionNumber);

   // let obj = eval('(' + myFilter+ ')');
   this.show = JSON.stringify(myFilter, ['qdescription']);


    console.log(this.show);
  }



  toAnswerOption(ac: AbstractControl): AnswerOption {
    let answerOption = {} as AnswerOption;
    answerOption.value = ac.get('answer').value;
    answerOption.correctAnswer = ac.get('iscorrect').value;
    return answerOption;
  }

  onSubmit() {
    this.saveQuestion();
    this.quizService.postnewQuiz(this.newQuiz).subscribe(quiz => {
      this.quiz = quiz
      console.log("quiz is");
      console.log(quiz);
    })
    console.log(this.newQuiz);
  }

}

