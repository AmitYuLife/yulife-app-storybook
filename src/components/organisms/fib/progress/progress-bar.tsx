import React, { memo, useContext, createContext } from "react";
import { ProgressBar } from "@molecules";

const ProgressBarContext = createContext({ currentPosition: 0, maxLength: 1 });

const _FIBProgressBar = () => {
  const { currentPosition, maxLength } = useContext(ProgressBarContext);

  return <ProgressBar currentPosition={currentPosition} maxLength={maxLength} />;
};

const memoizedFIBProgressBar = memo(_FIBProgressBar);

export const FIBProgressBar = Object.assign(memoizedFIBProgressBar, { ProgressBarContext });
