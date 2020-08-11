import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { CreateLeaderboardScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("CreateLeaderboardScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => (
    <CreateLeaderboardScreen onPressClose={voidFunc} isLoading={false} onCreateLeaderboard={voidFunc} />
  ));
