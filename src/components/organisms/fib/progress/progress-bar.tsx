import React, { memo, useContext, createContext, ComponentProps } from "react";
import { ProgressBar } from "@molecules";
import { FINAL_PROGRESS } from "@components/containers/products/fib/data/underwriting-journey-data";

const ProgressBarContext = createContext({ currentPosition: 0, maxLength: FINAL_PROGRESS });

interface Props {
  hideType?: ComponentProps<typeof ProgressBar>["hideType"];
}

const _FIBProgressBar = memo(({ hideType }: Props) => {
  const { currentPosition, maxLength } = useContext(ProgressBarContext);

  return <ProgressBar hideType={hideType} currentPosition={currentPosition} maxLength={maxLength} />;
});

export const FIBProgressBar = Object.assign(_FIBProgressBar, { ProgressBarContext });
