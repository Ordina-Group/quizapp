import { Question } from './question';

export interface Quiz {
    id: number;
    quizDescription: string;
    questions: Question[];
    pageTitle: string;
    errorMessage: string;
  }
