import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Quiz} from "../model/quiz";
import {Question} from "../model/question";
import {FormArray} from '@angular/forms';
import {AnswerIsCorrect} from "../model/answerIsCorrect";
import {AnswerOption} from "../model/answerOption";
import { QuizService } from '../services/quiz.service';
import {checkBudgets} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/bundle-calculator";


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
  currentQuestionsArray: Array<number>;

  constructor(private formBuilder: FormBuilder, private quizService: QuizService) {
    this.count = 0;
    this.currentQuestion = 0;
    this.currentQuestionsArray = [];
    this.lockQuizName = false;
    this.newQuiz = {questions: []} as Quiz;

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

    let newQuizQuestion = questionDescription;
    localStorage.setItem(newQuizQuestion, questionDescription);

    let myItem = localStorage.getItem(newQuizQuestion);
    console.log(myItem);

   // let answerObj ={answerOptions: "answerOption"};
    //localStorage.setItem('answerObj', JSON.stringify(answerObj));
this.checkQuestion();

  }


  checkQuestion(){
    this.currentQuestion++;
    this.count = this.currentQuestion;
    this.currentQuestionsArray.push(this.count);
  }

  onClick(){
    const number = this.count;
    console.log(this.count)
    console.log(this.quiz.id)
    this.quizService.getInitQuiz(this.quiz.id)

    // this.quizService.quizSubject.subscribe(oldquiz => { this.quiz = oldquiz
    //console.log("quiz is")
    //console.log(oldquiz)})
    // this.quiz.questions= this.oldQuestionArray;
    //   console.log(this.oldQuestionArray)

  }

  private toAnswerOption(ac: AbstractControl): AnswerOption {
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

