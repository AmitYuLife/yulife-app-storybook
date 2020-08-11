import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import RewardItemContent from "./reward-item-content";

const voidFunc: () => void = () => null;

storiesOf("RewardItemContent", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => {
    return (
      <RewardItemContent
        labelCtaPrimary="Primary"
        instructions={["Step one: Load the component", "Step two: Press a button"]}
        onPressCtaPrimary={voidFunc}
        onPressCtaSecondary={voidFunc}
        onPressCtaTertiary={voidFunc}
        labelCtaSecondary="secondary"
        labelCtaTertiary="teritary"
      />
    );
  });
