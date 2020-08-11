import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import InfoScreen from "./info.screen";

const voidFunc: () => void = () => null;

storiesOf("InfoScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => (
    <InfoScreen ctaLabel="push me" subheading="info screen" heading="heading" onPress={voidFunc} type="fitbit" />
  ));
