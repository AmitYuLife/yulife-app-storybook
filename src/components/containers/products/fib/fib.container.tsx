import React, { memo } from "react";
import { FibBrowseScreen } from "@screens";
import { handleNavigateBack } from "@navigation/utils";

interface IFibContainer {
  componentId: string;
}

const FibContainer = memo(function (props: IFibContainer) {
  const { componentId } = props;
  return <FibBrowseScreen onNavigateBack={handleNavigateBack(componentId)} />;
});

export default FibContainer;
