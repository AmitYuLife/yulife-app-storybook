import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { ChallengeDetailsScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("ChallengeDetailsScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => (
    <ChallengeDetailsScreen
      onPressCta={voidFunc}
      challengeType=""
      onPressSetUp={voidFunc}
      duration="0"
      milestones={[{ target: 1, reward: 2 }]}
      onPressClose={voidFunc}
      unit="meters"
    />
  ));
