import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { AnimatedChestScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("AnimatedChestScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => (
    <AnimatedChestScreen ctaLabel="button" onPressCta={voidFunc} onPressCtaSecondary={voidFunc} heading="Top" />
  ));
