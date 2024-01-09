import React, { useCallback, useEffect } from "react";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { SUPPORTED_FEEDBACK_FORM_TYPES } from "@graphql/constants";
import { useMutation, useQuery } from "@apollo/client";
import { AnswerInput } from "@graphql/_core/schema/globalTypes";
import { FeedbackForm } from "@organisms";
import { useDispatch } from "react-redux";
import { AppDataType, getUserDataStart } from "@redux/user/user.actions";
import Logger from "@services/logging/logger";
import { gql } from "@graphql/__generated";

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
      Logger.logMixpanelEvent("modal_viewed", {
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
        dispatch(getUserDataStart([AppDataType.coinLedger, AppDataType.todayActivity]));
      } catch (e) {
        Logger.error(e, { location: "feedback.modal", feedbackId: data?.form?.id });
      } finally {
        await Navigation.dismissModal(MODALS.feedback);
      }
    },
    [submitFeedbackForm, dispatch, data]
  );

  return <FeedbackForm form={data.form} submitForm={submitForm} loading={submitting || queryLoading} />;
};

export default FeedbackModal;
