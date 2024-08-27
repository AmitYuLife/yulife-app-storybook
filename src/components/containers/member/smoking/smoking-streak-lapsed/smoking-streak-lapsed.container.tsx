import React, { memo } from "react";
import { VoidFunction } from "@utils";
import { SmokingStreakLapsed } from "@screens";

interface ISmokingStreakLapsedProps {
  onClose: VoidFunction;
  onSubmit: VoidFunction;
}

const SmokingStreakLapsedContainer = ({ onClose, onSubmit }: ISmokingStreakLapsedProps) => {
  return <SmokingStreakLapsed onClose={onClose} onSubmit={onSubmit} />;
};

export default memo(SmokingStreakLapsedContainer);
