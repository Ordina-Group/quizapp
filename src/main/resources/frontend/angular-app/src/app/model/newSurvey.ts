import { Question } from '../model/question';

export interface NewSurvey {
  surveydescription: string;
  question: Array<object>;
}
