import React, { memo } from "react";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { VoidFunction } from "@utils";
import { SmokingCommitment } from "@components/screens";

interface ISmokingStreakLapsedProps {
  smokingState: HealthSmokingState;
  onClose: VoidFunction;
}

const SmokingStreakCommitment = ({ smokingState, onClose }: ISmokingStreakLapsedProps) => {
  return <SmokingCommitment smokingState={smokingState} onClose={onClose} />;
};

export default memo(SmokingStreakCommitment);
