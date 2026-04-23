import React, { useCallback, useEffect } from "react";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { SUPPORTED_FEEDBACK_FORM_TYPES } from "@graphql/constants";
import { useMutation, useQuery } from "@apollo/client";
import { FeedbackForm } from "@organisms";
import { useDispatch } from "react-redux";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import { AnswerInput, gql } from "@graphql/__generated";

const FeedbackModal = () => {
  const [submitFeedbackForm, { loading: submitting }] = useMutation(gql("SubmitFeedbackFormDocument"));
  const { data, loading: queryLoading } = useQuery(gql("GetPendingUserFeedbackDocument"), {
    fetchPolicy: "cache-only",
    variables: {
      supportedTypes: SUPPORTED_FEEDBACK_FORM_TYPES,
    },
  });

  useEffect(() => {
    if (data?.form) {
      EngagementTracking.logMixpanelEvent("modal_viewed", {
        name: "feedback.modal",
        survey_title: data.form.title,
        reward_value: data.form.awardYucoin,
      });
    }
  }, [data?.form]);

  const dispatch = useDispatch();

  const submitForm = useCallback(
    async (answers: AnswerInput[]) => {
      try {
        await submitFeedbackForm({
          variables: {
            id: data.form.id,
            answers,
          },
        });
        dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));
      } catch (e) {
        Logger.notify(e, { location: "feedback.modal", feedbackId: data?.form?.id });
      } finally {
        await Navigation.dismissModal(MODALS.feedback);
      }
    },
    [submitFeedbackForm, dispatch, data]
  );

  return <FeedbackForm form={data.form} submitForm={submitForm} loading={submitting || queryLoading} />;
};

export default FeedbackModal;
