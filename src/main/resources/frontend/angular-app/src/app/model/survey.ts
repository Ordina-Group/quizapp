import { Question } from './question';

export interface Survey {
    id: number;
    surveyDescription: string;
    questions: Question[];
    pageTitle: string;
    errorMessage: string;
  }
  