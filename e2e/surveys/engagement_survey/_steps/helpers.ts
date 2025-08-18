import { When, Then, Given } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when";
import * as then from "../_steps/then";

export const agreeAndProgressToNextQuestion = (questions: string[]) => async () => {
  for (let i = 0; i < questions.length; i++) {
    When("I agree and press next", when.agreeAndNext, async () => {
      Then(`I should see the question: ${questions[i]}`, then.nextQuestionVisible(questions[i]));
    });
  }
};
