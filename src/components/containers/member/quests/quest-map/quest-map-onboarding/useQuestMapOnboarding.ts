import { MobileOnboardingStepPerformed, gql } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useCallback, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

export const useQuestMapOnboarding = () => {
  const [performOnboardingStep] = useMutation(gql("PerformMobileOnboardingStepDocument"));

  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    Navigation.mergeOptions(ROUTES.quests, {
      statusBar: {
        style: showOnboarding ? "light" : "dark",
      },
    });
  }, [showOnboarding]);

  const handleClose = useCallback(() => {
    setShowOnboarding(false);
    performOnboardingStep({
      variables: {
        step: MobileOnboardingStepPerformed.QuestMapOnboarding,
      },
    });
  }, [performOnboardingStep]);

  return {
    showOnboarding,
    handleClose,
  };
};
