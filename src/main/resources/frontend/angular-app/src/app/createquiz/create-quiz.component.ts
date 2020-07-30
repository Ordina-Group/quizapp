import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Quiz} from "../model/quiz";
import {Question} from "../model/question";
import {FormArray} from '@angular/forms';
import {AnswerOption} from "../model/answerOption";
import { QuizService } from '../services/quiz.service';


@Component({
  selector: 'app-createquiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  quiz: number;
  quizForm: FormGroup;
  count: number;

  newQuiz: Quiz;
  currentQuestion: number;
  lockQuizName: boolean;

  constructor(private formBuilder: FormBuilder, private quizService: QuizService) {
    this.count = 0;
    this.currentQuestion = 0;
    this.lockQuizName = false;
    this.newQuiz = {questions: []} as Quiz;

    this.quizForm = this.formBuilder.group({
      quizName: [''],
      question: [''],
      answerOptions: this.formBuilder.array([])
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

  // hier wordt answerOptions to question gesaved en alle questions worden in object newQuiz bewaard
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
  }

  private toAnswerOption(ac: AbstractControl): AnswerOption {
    let answerOption = {} as AnswerOption;
    answerOption.value = ac.get('answer').value;
    answerOption.isCorrect = ac.get('iscorrect').value;
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
