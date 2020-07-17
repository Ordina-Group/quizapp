import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {QuestionComponent} from "./question/question.component";
import {EndpageComponent} from "./endpage/endpage.component";
import { HomescreenComponent } from './homescreen/homescreen.component';
import { NamescreenComponent } from './namescreen/namescreen.component';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';

const routes: Routes = [
  {path: '', component: HomescreenComponent},
  {path: 'home', component: HomeComponent},
  {path: 'homescreen', component: HomescreenComponent},
  {path: 'namescreen', component: NamescreenComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'endpage', component:EndpageComponent},
  {path: 'scoreboard', component: ScoreboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
