import React, { memo, useContext, createContext } from "react";
import { ProgressBar } from "@molecules";
import { FINAL_PROGRESS } from "@components/containers/products/fib/data/underwriting-journey-data";

const ProgressBarContext = createContext({ currentPosition: 0, maxLength: FINAL_PROGRESS });

const _FIBProgressBar = () => {
  const { currentPosition, maxLength } = useContext(ProgressBarContext);

  return <ProgressBar currentPosition={currentPosition} maxLength={maxLength} />;
};

const memoizedFIBProgressBar = memo(_FIBProgressBar, () => true);

export const FIBProgressBar = Object.assign(memoizedFIBProgressBar, { ProgressBarContext });
