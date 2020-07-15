import {Question} from './question';

export interface Quiz {
  id: number;
  surveyDescription: string;
  questions: Question[];
  pageTitle: string;
  errorMessage: string;
}
