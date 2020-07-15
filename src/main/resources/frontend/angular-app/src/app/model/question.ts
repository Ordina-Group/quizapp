import {AnswerOption} from './answerOption';


export interface Question {
  answerOptions: Array<AnswerOption>;
  number: number;
  questionDescription: string;
  iscorrect: boolean;
}
