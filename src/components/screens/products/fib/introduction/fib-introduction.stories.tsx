import React from "react";
import { storiesOf } from "@storybook/react-native";
import { avatarFiller } from "@components/screens/member/yu-screen/yu-screen.stories-helper";
import { FibIntroductionScreen, IFibIntroductionScreenProps } from "./fib-introduction.screen";

const defaultProps: IFibIntroductionScreenProps = {
  navigateToYuScreen: () => null,
  userName: "yulify mcyulifeface",
  onNavigateToSalary: () => null,
  avatar: avatarFiller,
};

storiesOf("FibIntroductionScreen").add("default", () => <FibIntroductionScreen {...defaultProps} />);
