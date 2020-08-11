import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { CollectRewardScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("CollectRewardScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => <CollectRewardScreen onPress={voidFunc} yucoin={100} ctaLabel="zoidberg" />);
