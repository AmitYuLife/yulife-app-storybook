import { useCallback, useContext, useState } from "react";
import { Navigation } from "@navigation/main";
import { useMutation } from "@apollo/client";
import { GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP } from "@graphql/onboardingSteps/performMobileOnboardingStep.gql";
import { MobileOnboardingStepPerformed } from "@graphql/_core/schema/globalTypes";
import { ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { YuScreenContext } from "../context/yu-screen.context";

export type OnboardingHandler = () => Promise<void>;

export const useOnboardingDismissalHandler = (step: MobileOnboardingStepPerformed): [boolean, OnboardingHandler] => {
  const { yumojiRemoteUrl } = useContext(YuScreenContext);
  const [onboardingDismissed, setOnboardingDismissed] = useState(false);
  const [performOnboarding] = useMutation(GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP);
  const dismissOnboarding = useCallback(async () => {
    if (step) {
      try {
        await performOnboarding({ variables: { step } });
      } catch (e) {
        Logger.error(e, { where: "use-onboarding-dismissal-handler-perform-onboarding" });
      }

      if (!yumojiRemoteUrl) {
        await Navigation.push(ROUTES.yuScreen, {
          component: {
            id: ROUTES.yumojiBuilder,
            name: ROUTES.yumojiBuilder,
          },
        });
      }

      // Don't block access to personal products if there is an error performing onboarding.
      setOnboardingDismissed(true);
    }
  }, [step, performOnboarding, yumojiRemoteUrl]);

  return [onboardingDismissed, dismissOnboarding];
};
