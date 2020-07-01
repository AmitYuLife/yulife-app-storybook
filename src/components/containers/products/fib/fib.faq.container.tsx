import React, { memo } from "react";
import { FibFaqScreen } from "@screens";
import { handleNavigateBack } from "@navigation/utils";

interface IFibFaqContainer {
  componentId: string;
}

const FibFaqContainer = memo(function (props: IFibFaqContainer) {
  const { componentId } = props;
  return <FibFaqScreen onNavigateBack={handleNavigateBack(componentId)} />;
});

export default FibFaqContainer;
