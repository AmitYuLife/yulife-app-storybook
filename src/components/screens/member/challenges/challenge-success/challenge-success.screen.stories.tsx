import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { ChallengeSuccessScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("ChallengeSuccessScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => (
    <ChallengeSuccessScreen
      loading={false}
      currentWorld={0}
      onPressCta={voidFunc}
      rating={5}
      reward={100}
      score={100}
      unit="minutes"
    />
  ));
