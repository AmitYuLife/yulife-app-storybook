import React, { FC, useCallback, useState } from "react";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@services/hooks/useBackHandler";
import AppReviewModalScreen from "../../screens/app-review/app-review.screen";
import InAppReview from "react-native-in-app-review";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  GQL_SUBMIT_APP_STORE_REVIEW_ACTION,
  SubmitAppStoreReviewActionMutationTuple,
} from "@graphql/member/submitAppStoreReviewAction.gql";
import { PendingPromptsForm } from "@graphql/_core/schema";
import { GQL_PENDING_PROMPTS_FORM } from "@graphql/member";
import { AppStoreReviewPromptAction } from "@graphql/_core/schema/globalTypes";
import Intercom from "react-native-intercom";
import { openYulife } from "@services/app-link";
import Logger from "@services/logging/logger";

const AppReviewModal: FC = () => {
  const [submitAppReviewAction] = useMutation<SubmitAppStoreReviewActionMutationTuple>(
    GQL_SUBMIT_APP_STORE_REVIEW_ACTION
  );

  const { data } = useQuery<PendingPromptsForm>(GQL_PENDING_PROMPTS_FORM, {
    fetchPolicy: "cache-only",
  });

  const backHandler = () => {
    Navigation.dismissModal(MODALS.appReview);
    return true;
  };

  useBackHandler(backHandler);

  const [isFirstStateShown, setIsFirstStateShown] = useState(true);

  const submitAppReview = useCallback(
    async (action: AppStoreReviewPromptAction) => {
      await submitAppReviewAction({
        variables: {
          id: data.pendingAppStoreReview.id,
          action,
        },
      });
    },
    [data, submitAppReviewAction]
  );

  const openReview = useCallback(async () => {
    if (InAppReview.isAvailable()) {
      await InAppReview.RequestInAppReview().catch((error) => {
        Logger.error(error, { file: "app-review-modal" });
      });
    } else {
      openYulife();
    }
  }, []);

  const onFirstButtonPress = useCallback(async () => {
    if (isFirstStateShown) {
      await submitAppReview(AppStoreReviewPromptAction.REVIEWED);
      await openReview();
    } else {
      Intercom.displayConversationsList();
    }

    Navigation.dismissModal(MODALS.appReview);
  }, [isFirstStateShown, submitAppReview, openReview]);

  const onSecondButtonPress = useCallback(async () => {
    if (isFirstStateShown) {
      await submitAppReview(AppStoreReviewPromptAction.DISMISSED);
      setIsFirstStateShown(false);
    } else {
      Navigation.dismissModal(MODALS.appReview);
    }
  }, [isFirstStateShown, setIsFirstStateShown, submitAppReview]);

  const onAskLaterButtonPress = useCallback(async () => {
    await submitAppReview(AppStoreReviewPromptAction.DISMISSED);
    Navigation.dismissModal(MODALS.appReview);
  }, [submitAppReview]);

  const heading = isFirstStateShown ? "Enjoying YuLife?" : "We’re sorry to hear that";
  const subheading = isFirstStateShown
    ? "(We’d love to know either way!)"
    : "We’d love a chance to do better. Would you mind leaving us a few tips?";
  const buttonLabel = isFirstStateShown ? "Yeah!" : "Give feedback";
  const secondButtonLabel = isFirstStateShown ? "Not really" : "No thanks";

  return (
    <AppReviewModalScreen
      heading={heading}
      subheading={subheading}
      buttonLabel={buttonLabel}
      secondButtonLabel={secondButtonLabel}
      showSecondState={!isFirstStateShown}
      onPress={onFirstButtonPress}
      onPressSecondary={onSecondButtonPress}
      onAskLaterPress={onAskLaterButtonPress}
    />
  );
};

export default AppReviewModal;
