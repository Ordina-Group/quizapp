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
import { CreatesurveyComponent } from './createsurvey/createsurvey.component';
import { HomescreenComponent } from './homescreen/homescreen.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    EndpageComponent,
    CreatesurveyComponent,
    HomescreenComponent,
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
