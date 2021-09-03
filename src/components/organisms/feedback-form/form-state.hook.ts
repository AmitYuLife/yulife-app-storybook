import { useState, useEffect, useCallback } from "react";
import { PendingPromptsForm } from "@graphql/_core/schema";
import { AnswerInput, FeedbackFormQuestionType } from "@graphql/_core/schema/globalTypes";
import { useBackHandler } from "@services/hooks/useBackHandler";
import Logger from "@services/logging/logger";

export default function useFormState(
  form: PendingPromptsForm["pendingFeedbackForm"],
  submitForm: (answers: AnswerInput[]) => void,
  supportedQuestionTypes: FeedbackFormQuestionType[]
) {
  const [answers, setAnswers] = useState([] as AnswerInput[]);
  const [question, setQuestion] = useState<Question>(null);

  /**
   * Sets the root question on initial data load
   */
  useEffect(() => {
    if (question) {
      return;
    }

    const needle = form.questions?.find((q) => q.isRoot);
    if (needle) {
      setQuestion(needle);
    }
  }, [form, setQuestion, question]);

  /**
   * Saves an answer to the local state
   */
  const saveAnswer = useCallback(
    (key: string, value: string) => {
      const newAnswers = [...answers];
      const index = newAnswers.findIndex((a) => a.key === key);
      if (index > -1) {
        newAnswers[index] = {
          key,
          value,
        };
      } else {
        newAnswers.push({ key, value });
      }

      setAnswers(newAnswers);
      const nextQuestion = getNextQuestion(question, value, form.questions, supportedQuestionTypes);
      if (nextQuestion) {
        setQuestion(nextQuestion);
        Logger.logMixpanelEvent("question_interaction", {
          name: "feedback.modal",
          survey_title: form.title,
          reward_value: form.awardYucoin,
        });
      } else {
        submitForm(newAnswers);
        Logger.logMixpanelEvent("survey_completed", {
          name: "feedback.modal",
          survey_title: form.title,
          reward_value: form.awardYucoin,
        });
      }
    },
    [answers, submitForm, question, form, supportedQuestionTypes]
  );

  /**
   * Go back a question
   */
  const canGoBack = answers.length > 0;
  const goBack = useCallback(() => {
    const lastAnswer = answers[answers.length - 1];
    const question = form.questions.find((q) => q.key === lastAnswer.key);
    setQuestion(question);
  }, [answers, form, setQuestion]);

  /**
   * Hardware back handler
   * Go back if possible, otherwise submit the form with current answers
   */
  const backHandler = useCallback(() => {
    if (canGoBack) {
      goBack();
    } else {
      submitForm(answers);
    }

    return true;
  }, [submitForm, goBack, canGoBack, answers]);

  useBackHandler(backHandler);

  const defaultAnswer = answers.find((a) => question && a.key === question.key)?.value;

  return {
    defaultAnswer,
    saveAnswer,
    question,
    answers,
    goBack,
    canGoBack,
  };
}

/**
 * Helpers & types
 */

type Question = PendingPromptsForm["pendingFeedbackForm"]["questions"][0];

const getNextQuestion = (
  currentQuestion: Question,
  answerValue: string,
  questions: Question[],
  supportedQuestionTypes: FeedbackFormQuestionType[]
): Question => {
  // find a matching regex condition
  const condition = currentQuestion.nextConditions.find((condition) =>
    answerValue.match(new RegExp(condition.regexMatch))
  );
  if (!condition) {
    return null;
  }

  // return the question by the condition key
  const nextQuestion = questions.find(
    (q) => q.key === condition.questionKey && supportedQuestionTypes.includes(q.type)
  );
  return nextQuestion;
};
