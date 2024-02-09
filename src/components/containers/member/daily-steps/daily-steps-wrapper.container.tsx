import { IMainTabsProps } from "@navigation/root";
import React, { memo } from "react";
import DailyStepsOldContainer from "./daily-steps-old.container";

type Props = IMainTabsProps;

const DailyStepsWrapper = (props: Props) => {
  // TODO: Add new daily steps container under toggle tempGameEnableYuHealth

  return <DailyStepsOldContainer {...props} />;
};

export default memo(DailyStepsWrapper);
