import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { LevelLockedScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("LevelLockedScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => <LevelLockedScreen onPressCta={voidFunc} level={50} />);
