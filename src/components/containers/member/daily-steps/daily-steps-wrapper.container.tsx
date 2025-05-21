import React, { memo } from "react";
import DailyStepsOldContainer from "./daily-steps-old.container";
import { useUserFeatures } from "@hooks";
import DailyStepsContainer from "./daily-steps.container";

const DailyStepsWrapper = (props: any) => {
  const { tempGameEnableReleaseYuHealthV4 } = useUserFeatures();

  if (!tempGameEnableReleaseYuHealthV4) {
    return <DailyStepsOldContainer {...props} />;
  }

  return <DailyStepsContainer {...props} />;
};

export default memo(DailyStepsWrapper);
