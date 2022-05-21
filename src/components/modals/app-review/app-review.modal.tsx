import React, { FC, useCallback, useState } from "react";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@hooks";
import AppReviewModalScreen from "@screens/app-review/app-review.screen";
import InAppReview from "react-native-in-app-review";
import { useMutation } from "@apollo/react-hooks";
import {
  GQL_SUBMIT_APP_STORE_REVIEW_ACTION,
  SubmitAppStoreReviewActionMutationTuple,
} from "@graphql/member/submitAppStoreReviewAction.gql";
import { AppStoreReviewPromptAction } from "@graphql/_core/schema/globalTypes";
import Intercom from "@intercom/intercom-react-native";
import { openYulife } from "@services/app-link";
import Logger from "@services/logging/logger";

export interface ReviewModalProps {
  id: string;
  title: string;
  body: string;
  rejectedTitle: string;
  rejectedBody: string;
  image: string;
}
const AppReviewModal: FC<ReviewModalProps> = (props: ReviewModalProps) => {
  const [submitAppReviewAction] = useMutation<SubmitAppStoreReviewActionMutationTuple>(
    GQL_SUBMIT_APP_STORE_REVIEW_ACTION
  );

  const backHandler = () => {
    Navigation.dismissModal(MODALS.appReview);
    return true;
  };

  useBackHandler(backHandler);

  const [isFirstStateShown, setIsFirstStateShown] = useState(true);
  const { id, title, body, rejectedTitle, rejectedBody, image } = props;

  const submitAppReview = useCallback(
    async (action: AppStoreReviewPromptAction) => {
      await submitAppReviewAction({
        variables: {
          id,
          action,
        },
      });
    },
    [id, submitAppReviewAction]
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
      Intercom.displayMessenger();
    }

    Navigation.dismissModal(MODALS.appReview);
  }, [isFirstStateShown, submitAppReview, openReview]);

  const onSecondButtonPress = useCallback(async () => {
    if (isFirstStateShown) {
      await submitAppReview(AppStoreReviewPromptAction.DISMISSED_NOT_REALLY);
      setIsFirstStateShown(false);
    } else {
      Navigation.dismissModal(MODALS.appReview);
    }
  }, [isFirstStateShown, setIsFirstStateShown, submitAppReview]);

  const onAskLaterButtonPress = useCallback(async () => {
    await submitAppReview(AppStoreReviewPromptAction.DISMISSED_ASK_LATER);
    Navigation.dismissModal(MODALS.appReview);
  }, [submitAppReview]);

  const heading = isFirstStateShown ? title : rejectedTitle;
  const subheading = isFirstStateShown ? body : rejectedBody;
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
      imageUrl={image}
    />
  );
};

export default AppReviewModal;
