import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Quiz} from "../model/quiz";
import {Question} from "../model/question";
import {AnswerOption} from "../model/answerOption";


@Component({
  selector: 'app-createsurvey',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  quizForm: FormGroup;
  count: number;

  newQuiz: Quiz;
  currentQuestion: number;
  lockQuizName: boolean;

  constructor(private formBuilder: FormBuilder) {
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

  get answerOptions(): FormArray {
    return this.quizForm.get('answerOptions') as FormArray;
  }

  get quizName(): string {
    return this.quizForm.get('quizName').value
  }

  ngOnInit() {
    this.addAnswerOption();
  }

  addAnswerOption(): void {
    this.answerOptions.push(this.newAnswerOption());
  }

  deleteAnswerOption() {
    (this.quizForm.get('answerOptions') as FormArray).removeAt(this.answerOptions.length - 1);
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

    this.newQuiz.pageTitle = quizname;
    this.newQuiz.questions.push(question);
  }

  onSubmit() {
    this.saveQuestion();
  }

  private newAnswerOption(): FormGroup {
    return this.formBuilder.group({
      answer: '',
      iscorrect: 'true'
    })
  }

  private toAnswerOption(ac: AbstractControl): AnswerOption {
    let answerOption = {} as AnswerOption;
    answerOption.value = ac.get('answer').value;
    answerOption.correctAnswer = ac.get('iscorrect').value;
    return answerOption;
  }

}

