import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import DailyStepsFitKitAuthorise from "@components/screens/member/daily-steps/daily-steps-fitkit-authorise";

const voidFunc: () => void = () => null;

storiesOf("DailyStepsFitKitAuthorise", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => (
    <DailyStepsFitKitAuthorise copy={{ permission: "persmission", permissionCta: "cta" }} onPress={voidFunc} />
  ));
