export interface QuestionDetails {
  question: string;
  options: string[];
}[]

export interface QuizDetails extends Array<QuestionDetails>{}
