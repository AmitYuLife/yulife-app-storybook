import React, { useCallback, memo } from "react";
import { Loading } from "@atoms";
import { FeedbackFormQuestionType, AnswerInput } from "@graphql/_core/schema/globalTypes";
import NumberSliderQuestion from "./questions/number-slider";
import CommentQuestion from "./questions/comment";
import MultipleChoice from "./questions/multiple-choice";
import { PendingPromptsForm } from "@graphql/_core/schema";
import useFormState from "./form-state.hook";
import { SUPPORTED_TYPES } from "@graphql/member";

interface Props {
  form: PendingPromptsForm["pendingFeedbackForm"];
  submitForm: (answers: AnswerInput[]) => void;
  loading: boolean;
}

/**
 * These ensure graceful fail if the client sends
 * back a question type that this client doesn't support yet
 */

const FeedbackModal = ({ form, submitForm, loading }: Props) => {
  const { defaultAnswer, saveAnswer, question, answers, canGoBack, goBack } = useFormState(
    form,
    submitForm,
    SUPPORTED_TYPES
  );
  const onDismiss = useCallback(() => submitForm(answers), [answers, submitForm]);

  if (!question || loading) {
    return <Loading />;
  }

  if (question.type === FeedbackFormQuestionType.NUMBER_SLIDER) {
    return (
      <NumberSliderQuestion
        slider={{
          leftLabel: question.labels.left,
          rightLabel: question.labels.right,
          minValue: question.range.min,
          maxValue: question.range.max,
        }}
        heading={form.title}
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

  if (question.type === FeedbackFormQuestionType.COMMENT) {
    return (
      <CommentQuestion
        heading={form.title}
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

  if (question.type === FeedbackFormQuestionType.MULTIPLE_CHOICE) {
    return (
      <MultipleChoice
        heading={form.title}
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
