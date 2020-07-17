import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { SurveyService} from './services/survey.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { EndpageComponent } from './endpage/endpage.component';
import { SubmittedAnswerService } from './services/submitAnswer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HomescreenComponent } from './homescreen/homescreen.component';
import {NamescreenComponent} from './namescreen/namescreen.component';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
// import { formatDate } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    EndpageComponent,
    HomescreenComponent,
    NamescreenComponent,
    ScoreboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SurveyService, SubmittedAnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
