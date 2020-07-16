import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { QuizService} from './services/quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { EndpageComponent } from './endpage/endpage.component';
import { SubmitAnswerService } from './services/submitAnswer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateQuizComponent } from './createquiz/create-quiz.component';
import { HomescreenComponent } from './homescreen/homescreen.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    EndpageComponent,
    CreateQuizComponent,
    HomescreenComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuizService, SubmitAnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
