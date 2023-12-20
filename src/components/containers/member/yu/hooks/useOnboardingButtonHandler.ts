import { useCallback, useContext, useState } from "react";
import { Navigation } from "@navigation/main";
import { useMutation } from "@apollo/client";
import { ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { YuScreenContext } from "../context/yu-screen.context";
import { useDispatch } from "react-redux";
import { useNavigationComponentDidAppear } from "@hooks";
import { MobileOnboardingStepPerformed } from "@graphql/_core/schema/globalTypes";
import { MobileOnboardingStepPerformed as MobileOnboardingStepPerformedNew, gql } from "@graphql/__generated";
import { GetYuScreen_getYuScreen_onboarding } from "@graphql/_core/schema";

export type OnboardingHandler = () => Promise<void> | void;

export const useOnboardingButtonHandler = (
  onboarding: GetYuScreen_getYuScreen_onboarding
): {
  shouldShowOnboarding: boolean;
  closeOnboarding: () => Promise<void>;
  onPressOnboardingButton: OnboardingHandler;
} => {
  const dispatch = useDispatch();
  const { yumojiRemoteUrl } = useContext(YuScreenContext);
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState<boolean>(true);
  const [performOnboarding] = useMutation(gql("PerformMobileOnboardingStepDocument"));

  /**
   * Hide the onboarding screen when the user navigates to the pension screen.
   */
  useNavigationComponentDidAppear(() => {
    if (onboarding?.id === MobileOnboardingStepPerformed.yuScreenOnboardingPension) {
      setShouldShowOnboarding(false);
    }
  }, ROUTES.pensionConnection);

  const markOnboardingAsViewed = useCallback(async () => {
    try {
      // Mark the onboarding step as completed.
      await performOnboarding({ variables: { step: onboarding?.id as unknown as MobileOnboardingStepPerformedNew } }); //remove unknown when we finish to refactor getYuScreen.gql
    } catch (e) {
      Logger.error(e, { where: "use-onboarding-dismissal-handler-perform-onboarding" });
    }
  }, [performOnboarding, onboarding?.id]);

  const showYumojiScreenIfNotCreated = useCallback(async () => {
    if (yumojiRemoteUrl) {
      return;
    }

    await Navigation.push(ROUTES.yuScreen, {
      component: {
        id: ROUTES.yumojiBuilder,
        name: ROUTES.yumojiBuilder,
      },
    });
  }, [yumojiRemoteUrl]);

  const closeOnboarding = useCallback(async () => {
    await markOnboardingAsViewed();
    await showYumojiScreenIfNotCreated();
    setShouldShowOnboarding(false);
  }, [markOnboardingAsViewed, showYumojiScreenIfNotCreated]);

  const onPressOnboardingButton = useCallback(async () => {
    // If no onboarding screen is defined then we don't want to show it.
    if (!onboarding?.id) {
      return;
    }

    await markOnboardingAsViewed();

    // Navigates the user to the next screen if there is an action defined.
    if (onboarding.button?.onPress?.sduiAction) {
      dispatch({
        type: onboarding.button?.onPress?.sduiAction?.type,
        payload: { serverPayload: onboarding.button?.onPress?.sduiAction?.payload },
      });

      return;
    }

    await showYumojiScreenIfNotCreated();

    setShouldShowOnboarding(false);
  }, [dispatch, onboarding, markOnboardingAsViewed, showYumojiScreenIfNotCreated]);

  return {
    shouldShowOnboarding,
    onPressOnboardingButton,
    closeOnboarding,
  };
};
