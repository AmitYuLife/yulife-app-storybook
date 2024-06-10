import { MobileOnboardingStepPerformed, gql } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useCallback, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";

export const useQuestMapOnboarding = () => {
  const currentRoute = useSelector(getRouteState);

  const [performOnboardingStep] = useMutation(gql("PerformMobileOnboardingStepDocument"));

  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    if (currentRoute === ROUTES.quests) {
      Navigation.mergeOptions(ROUTES.quests, {
        statusBar: {
          style: showOnboarding ? "light" : "dark",
        },
      });
    }
  }, [showOnboarding, currentRoute]);

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
