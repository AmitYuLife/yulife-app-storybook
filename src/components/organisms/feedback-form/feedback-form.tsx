import React, { useCallback, memo } from "react";
import { Loading } from "@atoms";
import { FeedbackFormQuestionType, AnswerInput, GetPendingUserFeedbackQuery } from "@graphql/__generated";
import NumberSliderQuestion from "./questions/number-slider";
import CommentQuestion from "./questions/comment";
import MultipleChoice from "./questions/multiple-choice";
import useFormState from "./form-state.hook";
import EngagementTracking from "@services/logging/engagement-tracking";

interface Props {
  form: GetPendingUserFeedbackQuery["form"];
  submitForm: (answers: AnswerInput[]) => void;
  loading: boolean;
}

/**
 * These ensure graceful fail if the client sends
 * back a question type that this client doesn't support yet
 */

const FeedbackModal = ({ form, submitForm, loading }: Props) => {
  const { defaultAnswer, saveAnswer, question, answers, canGoBack, goBack } = useFormState(form, submitForm);
  const onDismiss = useCallback(() => {
    submitForm(answers);
    EngagementTracking.logMixpanelEvent("modal_dismissed", {
      name: "feedback.modal",
      survey_title: form?.title,
      reward_value: form.awardYucoin,
    });
  }, [answers, submitForm, form]);

  if (!question || loading) {
    return <Loading />;
  }

  if (question.type === FeedbackFormQuestionType.NumberSlider) {
    return (
      <NumberSliderQuestion
        slider={{
          leftLabel: question.labels.left,
          rightLabel: question.labels.right,
          minValue: question.range.min,
          maxValue: question.range.max,
        }}
        heading={form?.title}
        image={question.image.uri}
        questionText={question.questionText}
        description={question.description}
        icon={question.icon.uri}
        submitLabel={question.labels.submit}
        defaultAnswer={defaultAnswer}
        onDismiss={onDismiss}
        onSubmitAnswer={(value: string) => saveAnswer(question.key, value)}
        onBack={canGoBack ? goBack : null}
      />
    );
  }

  if (question.type === FeedbackFormQuestionType.Comment) {
    return (
      <CommentQuestion
        heading={form?.title}
        image={question.image.uri}
        questionText={question.questionText}
        description={question.description}
        icon={question.icon.uri}
        submitLabel={question.labels.submit}
        placeholder={question.labels.placeholder}
        defaultAnswer={defaultAnswer}
        onSubmitAnswer={(value: string) => saveAnswer(question.key, value)}
        onDismiss={onDismiss}
        onBack={canGoBack ? goBack : null}
      />
    );
  }

  if (question.type === FeedbackFormQuestionType.MultipleChoice) {
    return (
      <MultipleChoice
        heading={form?.title}
        image={question.image.uri}
        questionText={question.questionText}
        description={question.description}
        icon={question.icon.uri}
        options={question.options}
        onSubmitAnswer={(value: string) => saveAnswer(question.key, value)}
        onDismiss={onDismiss}
        onBack={canGoBack ? goBack : null}
      />
    );
  }
};

export default memo(FeedbackModal);
