import { Question } from './question';

export interface Survey {
    id: number;
    surveyDescription: string;
    questions: Array<Question>;
    pageTitle: string;
    errorMessage: string;
    survey: Survey;
  }
  