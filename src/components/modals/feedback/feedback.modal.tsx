import React, { useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { GQL_SUBMIT_FEEDBACK_FORM, SubmitFeedbackFormMutationTuple, GQL_PENDING_PROMPTS_FORM } from "@graphql/member";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { PendingPromptsForm } from "@graphql/_core/schema";
import { AnswerInput } from "@graphql/_core/schema/globalTypes";
import { FeedbackForm } from "@organisms";

const FeedbackModal = () => {
  const [submitFeedbackForm, { loading: submitting }] = useMutation<SubmitFeedbackFormMutationTuple>(
    GQL_SUBMIT_FEEDBACK_FORM
  );
  const { data, loading: queryLoading } = useQuery<PendingPromptsForm>(GQL_PENDING_PROMPTS_FORM, {
    fetchPolicy: "cache-only",
  });

  const submitForm = useCallback(
    async (answers: AnswerInput[]) => {
      try {
        await submitFeedbackForm({
          variables: {
            id: data.pendingFeedbackForm.id,
            answers,
          },
        });
      } catch (e) {
        // silent fail
      }

      await Navigation.dismissModal(MODALS.feedback);
    },
    [submitFeedbackForm, data]
  );

  return <FeedbackForm form={data.pendingFeedbackForm} submitForm={submitForm} loading={submitting || queryLoading} />;
};

export default FeedbackModal;
