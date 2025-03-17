import React, { memo } from "react";
import DailyStepsOldContainer from "./daily-steps-old.container";
import { useUserFeatures } from "@hooks";
import DailyStepsContainer from "./daily-steps.container";

const DailyStepsWrapper = (props: any) => {
  const { tempGameEnableReleaseYuHealthV3 } = useUserFeatures();

  if (!tempGameEnableReleaseYuHealthV3) {
    return <DailyStepsOldContainer {...props} />;
  }

  return <DailyStepsContainer {...props} />;
};

export default memo(DailyStepsWrapper);
