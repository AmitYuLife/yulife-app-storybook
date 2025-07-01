import React, { memo } from "react";
import { DailyStepsLoading } from "./subcontainers/daily-steps-loading";
import { DailyStepsOnline } from "./subcontainers/daily-steps-online";

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
  if (isLoading) {
    return <DailyStepsLoading />;
  }

  return (
    <DailyStepsOnline
      isUnauthorised={isUnauthorised}
      isUnavailable={isUnavailable}
      hasEvents={hasEvents}
      showHeroCards={showHeroCards}
    />
  );
};

export default memo(DailyStepsContent);
