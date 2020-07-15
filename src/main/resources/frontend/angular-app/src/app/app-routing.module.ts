import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {QuestionComponent} from "./question/question.component";
import {EndpageComponent} from "./endpage/endpage.component";
import {HomescreenComponent} from './homescreen/homescreen.component';
import {CreateQuizComponent} from "./createsurvey/create-quiz.component";


const routes: Routes = [
  {path: '', component: HomescreenComponent},
  {path: 'home', component: HomeComponent},
  {path: 'homescreen', component: HomescreenComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'endpage', component: EndpageComponent},
  {path: 'createsurvey', component: CreateQuizComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
