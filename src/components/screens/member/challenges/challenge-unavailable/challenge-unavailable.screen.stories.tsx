import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { ChallengeUnavailableScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("ChallengeUnavailableScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => <ChallengeUnavailableScreen onPressCta={voidFunc} timeRemaining="10" />);
