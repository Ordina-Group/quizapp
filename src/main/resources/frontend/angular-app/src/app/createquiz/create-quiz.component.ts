import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArrayName, FormBuilder, FormControl, FormGroup} from "@angular/forms";
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

  quiz: Quiz;
  quizForm: FormGroup;
  count: number;
  newQuiz: Quiz;
  currentQuestion: number;
  lockQuizName: boolean;
  values: object;
  currentQuestionsArray: Array<number>;
  stored: Array<any>;
  storedTwo: Array<any>;
  filteredItem: Question
  storedNew: Array<any>;
  answerOptionsArray: Array<any>;


  constructor(private formBuilder: FormBuilder, private quizService: QuizService) {
    this.count = 0;
    this.currentQuestionsArray = [];
    this.lockQuizName = false;
    this.newQuiz = {questions: []} as Quiz;
    this.stored = [];
    this.storedTwo = [];
    this.storedNew = [];


    this.quizForm = this.formBuilder.group({
      quizName: [''],
      question: [''],
      currentQuestionsArray: this.formBuilder.array([]),
      answerOptions: this.formBuilder.array([])
    })
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

    //stopt het in this.quizName voor submitfunctie
    let quizname = this.quizName;

    //haal vraag omschrijving op uit het formulier
    let questionDescription = this.quizForm.get('question').value;

    //dit onderstaande is voor submitfunctie
    let question = {answerOptions: []} as Question;
    this.answerOptions.controls.forEach(control => {
      let answerOption = this.toAnswerOption(control)
      question.answerOptions.push(answerOption)
    })
    question.questionDescription = questionDescription;


//haalt antwoordopties uit formulier
  let answeropt = this.quizForm.get('answerOptions').value;
   console.log(answeropt);
   console.log(this.storedTwo);

   //verzamel alle answers elementen van het answeropt object en stop ze in een array (storedTwo)
    for (let i=0; i<answeropt.length; i++){
      this.storedTwo.push(answeropt[i].answer);
    }


    console.log(this.storedTwo);

    //dit is voor submitfunctie
    this.newQuiz.quizDescription = quizname;
    this.newQuiz.questions.push(question);

    //zet het vraagnummer
    this.count++;
    console.log('nu is count' + this.count);
    question.id = this.count;

//maakt een object voor localstorage en stopt het object (q) in een array
    let q ={id: this.count, qdescription: questionDescription, answeropt: this.storedTwo}
    this.stored.push(q);

    //stopt array 'stored' in localstorage en geeft hem als naam/key: 'questions'
    localStorage.setItem('questions', JSON.stringify(this.stored));
    let myItem = JSON.parse(localStorage.getItem('questions'));

    console.log(myItem);

    //empty the array answers hier, want anders gaat deze de antwoorden van de volgende vraag ook erbij stoppen
    this.storedTwo = [];


    this.checkQuestion();
  }


  //deze functie zorgt ervoor dat de button met vraagnummer boven de vraag verschijnt
  checkQuestion(){
    this.currentQuestionsArray.push(this.count)
  }

  //Onclick functie logt dus de juiste vraagomschrijving in het inputveld als je op de button met nummer klikt
  onClick(questionNumber){
    console.log(questionNumber);
   // this.deleteAnswerOption();
     while (this.answerOptions.length !== 0) {
        this.answerOptions.removeAt(this.answerOptions.length - 1)
      }



//haalt de info uit de localstorage
   const myFilter = JSON.parse(localStorage.getItem('questions')).filter(questions =>questions.id === questionNumber);
    this.values = myFilter[0].qdescription;
    console.log(this.values);
    console.log(myFilter[0].answeropt);

    //hier logt ie het eerste antwoord.
    console.log(myFilter[0].answeropt[0]);


//pushed het naar de antwoordoptie velden
    for (let i=0; i<myFilter[0].answeropt.length; i++) {
      this.answerOptions.push(this.formBuilder.group({
        answer: myFilter[0].answeropt[i],
        iscorrect: 'true'
      }));
    }

  //hier weer opties saven naar localstorage, want er zijn mogelijk wijzigingen aangebracht
 //   let questionDescription = this.quizForm.get('question').value;

   // let answeropt = this.quizForm.get('answerOptions').value;
  //  console.log(answeropt);
  //  console.log(this.storedTwo);

    //verzamel alle answers elementen van het answeropt object en stop ze in een array
   // for (let i=0; i<answeropt.length; i++){
    //  this.storedTwo.push(answeropt[i].answer);
   /// }

    // maak weer object aan en stop het weer in en array, dit keer met questionNumber als id
   // let q ={id: questionNumber, qdescription: questionDescription, answeropt: this.storedTwo}
   // this.stored.push(q);
   // console.log(this.stored);

   // localStorage.setItem('questions', JSON.stringify(this.stored));
  //  console.log(this.stored);
  //  this.storedTwo = [];
 //   this.stored = []


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

