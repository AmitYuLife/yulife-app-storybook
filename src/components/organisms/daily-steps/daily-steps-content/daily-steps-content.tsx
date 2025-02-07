import React, { memo, useCallback } from "react";
import { DailyStepsLoading } from "./subcontainers/daily-steps-loading";
import { DailyStepsOnline } from "./subcontainers/daily-steps-online";
import { bottomTabs, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";

export interface IDailyStepsContentProps {
  isLoading?: boolean;
  isUnavailable?: boolean;
  isUnauthorised?: boolean;
  hasAskedPreviously?: boolean;
  onConnect?: () => Promise<void>;
  hasEvents?: boolean;
  showHeroCards?: boolean;
}

const DailyStepsContent = ({
  isLoading,
  isUnavailable,
  isUnauthorised,
  hasEvents,
  showHeroCards,
}: IDailyStepsContentProps) => {
  const onReferralsButtonPress = useCallback(
    () =>
      Navigation.push(ROUTES.dailySteps, {
        component: {
          id: ROUTES.referralInformation,
          name: ROUTES.referralInformation,
          passProps: {
            sourceId: ROUTES.dailySteps,
          },
          options: {
            bottomTabs,
            sideMenu: {
              left: {
                enabled: false,
                visible: false,
              },
            },
          },
        },
      }),
    []
  );

  if (isLoading) {
    return <DailyStepsLoading />;
  }

  return (
    <DailyStepsOnline
      onReferralsButtonPress={onReferralsButtonPress}
      isUnauthorised={isUnauthorised}
      isUnavailable={isUnavailable}
      hasEvents={hasEvents}
      showHeroCards={showHeroCards}
    />
  );
};

export default memo(DailyStepsContent);
