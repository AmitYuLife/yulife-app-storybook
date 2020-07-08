import React, { memo } from "react";
import { Navigation } from "react-native-navigation";
import { FibEditSalaryScreen } from "@components/screens";

interface IFibEditSalaryContainer {
  componentId: string;
}

function navigateBack(componentId: string) {
  Navigation.pop(componentId);
}

const FibEditSalaryContainer = memo(function (props: IFibEditSalaryContainer) {
  const { componentId } = props;

  return <FibEditSalaryScreen onNavigateBack={() => navigateBack(componentId)} />;
});

export default FibEditSalaryContainer;
