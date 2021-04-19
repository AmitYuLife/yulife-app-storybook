import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import StreaksScreen from "./streaks.screen";

const voidFunc: () => void = () => null;

storiesOf("StreaksScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => (
    <StreaksScreen
      heading="streaks"
      onSubmit={voidFunc}
      ribbonLabel="2000 YuCoin"
      isLoading={false}
      timeRemaining="20"
      onClose={voidFunc}
      reward=""
      onPressCtaSecondary={voidFunc}
      primaryButtonLabel="Primary button"
      streakAwardId="1234"
      streakCompleted={1}
      streakMax={100}
      subHeading="sub heading"
    />
  ));
