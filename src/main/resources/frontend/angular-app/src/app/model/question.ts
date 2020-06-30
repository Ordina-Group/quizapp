import { AnswerOptions } from './answerOptions';

export interface Question {
    answerOptions: Array<AnswerOptions>;
    number: number;
    questionDescription: string;
  }
  