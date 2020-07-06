import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Survey} from "../model/survey";
import {Question} from "../model/question";
import { FormArray } from '@angular/forms';



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



 constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(){

  }



  get answeropts(){
    return this.userForm.get('answeropts') as FormArray;

  }

  addAnsweropts() {
    this.answeropts.push(this.formBuilder.control(''));
  }

}
