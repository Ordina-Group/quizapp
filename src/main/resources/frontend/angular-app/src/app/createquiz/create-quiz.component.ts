import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArrayName, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Quiz} from '../model/quiz';
import {Question} from '../model/question';
import {FormArray} from '@angular/forms';
import {AnswerOption} from '../model/answerOption';
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
  filteredItem: Question;
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
    return this.quizForm.get('quizName').value;
  }

  private newAnswerOption(): FormGroup {
    return this.formBuilder.group({
      answer: '',
      iscorrect: 'true'
    });
  }

  nextQuestion(){
    this.saveQuestion();
    this.quizForm.get('question').reset();
    this.quizForm.get('answerOptions').reset();
  }

  saveQuestion() {
    this.checkQuestionCount();
    this.updateStorage();
    this.lockQuizName = true;
  }


  updateStorage() {

    // stopt het in this.quizName voor submitfunctie
    const quizname = this.quizName;

    // haal vraag omschrijving op uit het formulier
    const questionDescription = this.quizForm.get('question').value;

    // dit onderstaande is voor submitfunctie
    const question = {answerOptions: []} as Question;
    this.answerOptions.controls.forEach(control => {
      const answerOption = this.toAnswerOption(control);
      question.answerOptions.push(answerOption);
    });
    question.questionDescription = questionDescription;


// haalt antwoordopties uit formulier
    const answeropt = this.quizForm.get('answerOptions').value;
    console.log(answeropt);
    console.log(this.storedTwo);

   // verzamel alle answers elementen van het answeropt object en stop ze in een array (storedTwo)
    for (let i = 0; i < answeropt.length; i++){
    //  this.storedTwo.push(answeropt[i].answer);
      this.storedTwo.push(this.quizForm.get('answerOptions'));
    }
    this.storedTwo.push(this.quizForm.get('answerOptions').value);

    console.log(this.storedTwo);

    // dit is voor submitfunctie
    this.newQuiz.quizDescription = quizname;
    this.newQuiz.questions.push(question);

    // zet het vraagnummer
    question.id = this.count;

// maakt een object voor localstorage en stopt het object (q) in een array
    const q = {id: this.count, qdescription: questionDescription, answeropt: this.storedTwo};
    this.stored.push(q);

    // stopt array 'stored' in localstorage en geeft hem als naam/key: 'questions'
    localStorage.setItem('questions', JSON.stringify(this.stored));
    const myItem = JSON.parse(localStorage.getItem('questions'));

    console.log(myItem);

    // empty the array answers hier, want anders gaat deze de antwoorden van de volgende vraag ook erbij stoppen
    this.storedTwo = [];

  }


  // deze functie zorgt ervoor dat de button met vraagnummer boven de vraag verschijnt
  checkQuestionCount(){
    this.count++;
    console.log('nu is count' + this.count);
    this.currentQuestionsArray.push(this.count);
  }

  // Onclick functie logt dus de juiste vraagomschrijving in het inputveld als je op de button met nummer klikt
  onClick(questionNumber){


    console.log(questionNumber);
   // this.deleteAnswerOption();
    while (this.answerOptions.length !== 0) {
     this.answerOptions.removeAt(this.answerOptions.length - 1);
   }
    this.values = null;
    this.storedTwo = [];
    this.stored = [];

    const found = JSON.parse(localStorage.getItem('questions')).filter(questions => questions.id === questionNumber);
    console.log(found);

    console.log(found);
    this.values = found[0].qdescription;
    console.log(this.values);
    for (let i = 0; i < found[0].answeropt.length; i++) {
      this.answerOptions.push(this.formBuilder.group({
        answer: found[0].answeropt[i],
        iscorrect: 'true'
      }));
    }
  }

  toAnswerOption(ac: AbstractControl): AnswerOption {
    const answerOption = {} as AnswerOption;
    answerOption.value = ac.get('answer').value;
    answerOption.correctAnswer = ac.get('iscorrect').value;
    return answerOption;
  }

  onSubmit() {
    this.saveQuestion();
    this.quizService.postnewQuiz(this.newQuiz).subscribe(quiz => {
      this.quiz = quiz;
      console.log('quiz is');
      console.log(quiz);
    });
    console.log(this.newQuiz);
  }

  removeQuestion() {
    this.onClick(this.currentQuestionsArray.length - 1);
    (this.quizForm.get('currentQuestionsArray') as FormArray).removeAt(this.currentQuestionsArray.length - 1);
    this.count--;
    console.log('Vraag verwijderd. Nu is count: ' + this.count);
    this.currentQuestionsArray.push(this.count);
  }
}

