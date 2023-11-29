import React, { memo } from "react";

import { useUserFeatures } from "@hooks";
import YuCoinPowerExplained from "./yu-coin-power-explained";
import YuCoinPowerExplainedLegacy from "./_legacy/yu-coin-power-explained";

const YuCoinPowerExplainedWrapper = () => {
  const { showNewYuCoinExplained } = useUserFeatures();
  return showNewYuCoinExplained ? <YuCoinPowerExplained /> : <YuCoinPowerExplainedLegacy />;
};

export default memo(YuCoinPowerExplainedWrapper);
