import { AnswerOption } from './answerOption';


export interface Question {
    id: number;
    answerOptions: Array<AnswerOption>;
    number: number;
    questionDescription: string;
    iscorrect: boolean;
    videoId: string;
  }
