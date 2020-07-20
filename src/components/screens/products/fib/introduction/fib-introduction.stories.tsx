import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibIntroductionScreen, IFibIntroductionScreenProps } from "./fib-introduction.screen";

const defaultProps: IFibIntroductionScreenProps = {
  navigateToYuScreen: () => null,
  firstName: "yulify mcyulifeface",
  onNavigateToSalary: () => null,
  avatar: "",
};

storiesOf("FibIntroductionScreen").add("default", () => <FibIntroductionScreen {...defaultProps} />);
