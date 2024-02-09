import React, { memo, useCallback } from "react";
import { DailyStepsLoading } from "./subcontainers/daily-steps-loading";
import { FitkitUnavailable } from "./subcontainers/fitkit-unavailable";
import { FitkitUnauthorised } from "./subcontainers/fitkit-unauthorised";
import { DailyStepsOnline } from "./subcontainers/daily-steps-online";
import { bottomTabs, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";

export interface IDailyStepsContentProps {
  isLoading?: boolean;
  isUnavailable?: boolean;
  isUnauthorised?: boolean;
  hasAskedPreviously?: boolean;
  onConnect?: () => Promise<void>;
}

const DailyStepsContent = ({
  isLoading,
  hasAskedPreviously,
  isUnavailable,
  isUnauthorised,
  onConnect,
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

  if (isUnavailable) {
    return <FitkitUnavailable />;
  }

  if (isUnauthorised) {
    return (
      <FitkitUnauthorised
        onPress={onConnect}
        isIosMotionAuthorised={true}
        hasRequestedPermission={hasAskedPreviously}
      />
    );
  }

  return <DailyStepsOnline onReferralsButtonPress={onReferralsButtonPress} />;
};

export default memo(DailyStepsContent);
