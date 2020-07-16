import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibEditSalaryScreen, IEditSalaryScreen } from "./fib.edit-salary.screen";

const defaultProps: IEditSalaryScreen = {
  onNavigateBack: () => null,
  onNavigateToBrowsePackages: () => null,
  onNavigateToSalaryDescription: () => null,
  salary: 100,
  updateSalary: () => null,
};

storiesOf("FibEditSalaryScreen").add("default", () => <FibEditSalaryScreen {...defaultProps} />);
