import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import {SurveyService} from './surveys/survey.service';
import { SubmittedAnswerService } from './submittedanswers/submittedanswer.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    EndpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SurveyService, SubmittedAnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
