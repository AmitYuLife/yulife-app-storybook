import { IMainTabsProps } from "@navigation/root";
import React, { memo } from "react";
import DailyStepsOldContainer from "./daily-steps-old.container";
import { useUserFeatures } from "@hooks";
import DailyStepsContainer from "./daily-steps.container";

type Props = IMainTabsProps;

const DailyStepsWrapper = (props: Props) => {
  const { tempGameEnableReleaseYuHealthV2 } = useUserFeatures();

  if (!tempGameEnableReleaseYuHealthV2) {
    return <DailyStepsOldContainer {...props} />;
  }

  return <DailyStepsContainer {...props} />;
};

export default memo(DailyStepsWrapper);
