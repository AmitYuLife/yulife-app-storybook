import React, { memo } from "react";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { VoidFunction } from "@utils";
import { SmokingStreakLapsed } from "@screens";

interface ISmokingStreakLapsedProps {
  smokingState: HealthSmokingState;
  onClose: VoidFunction;
  onSubmit: VoidFunction;
}

const SmokingStreakLapsedContainer = ({ smokingState, onClose, onSubmit }: ISmokingStreakLapsedProps) => {
  return <SmokingStreakLapsed smokingState={smokingState} onClose={onClose} onSubmit={onSubmit} />;
};

export default memo(SmokingStreakLapsedContainer);
