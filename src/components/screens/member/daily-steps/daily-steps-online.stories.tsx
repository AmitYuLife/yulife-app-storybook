import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import DailyStepsOnline from "@components/screens/member/daily-steps/daily-steps-online";

const voidFunc: () => void = () => null;

storiesOf("DailyStepsOnline", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => <DailyStepsOnline coinsToday={200} steps={200} onCtaPress={voidFunc} />);
