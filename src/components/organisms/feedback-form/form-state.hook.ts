import { useState, useEffect, useCallback } from "react";
import { GetPendingUserFeedbackQuery, AnswerInput } from "@graphql/__generated";
import { useBackHandler } from "@hooks";
import EngagementTracking from "@services/logging/engagement-tracking";
import { SUPPORTED_FEEDBACK_FORM_TYPES } from "@graphql/constants";

export default function useFormState(
  form: GetPendingUserFeedbackQuery["form"],
  submitForm: (answers: AnswerInput[]) => void
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
      const nextQuestion = getNextQuestion(question, value, form.questions);
      if (nextQuestion) {
        setQuestion(nextQuestion);
        EngagementTracking.logMixpanelEvent("question_interaction", {
          name: "feedback.modal",
          survey_title: form.label,
          reward_value: form.awardYucoin,
        });
      } else {
        submitForm(newAnswers);
        EngagementTracking.logMixpanelEvent("survey_completed", {
          name: "feedback.modal",
          survey_title: form.label,
          reward_value: form.awardYucoin,
        });
      }
    },
    [answers, submitForm, question, form]
  );

  /**
   * Go back a question
   */
  const canGoBack = answers.length > 0;
  const goBack = useCallback(() => {
    const lastAnswer = answers[answers.length - 1];
    const previousQuestion = form.questions.find((q) => q.key === lastAnswer.key);
    setQuestion(previousQuestion);
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

type Question = GetPendingUserFeedbackQuery["form"]["questions"][0];

const getNextQuestion = (currentQuestion: Question, answerValue: string, questions: Question[]): Question => {
  // find a matching regex condition
  const condition = currentQuestion.nextConditions.find((c) => answerValue.match(new RegExp(c.regexMatch)));
  if (!condition) {
    return null;
  }

  // return the question by the condition key
  const nextQuestion = questions.find(
    (q) => q.key === condition.questionKey && SUPPORTED_FEEDBACK_FORM_TYPES.includes(q.type)
  );
  return nextQuestion;
};
