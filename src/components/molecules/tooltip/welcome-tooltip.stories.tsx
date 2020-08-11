import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import WelcomeTooltip from "./welcome-tooltip";

const voidFunc: () => void = () => null;

storiesOf("Welcome Tooltip", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => (
    <WelcomeTooltip
      copy={{
        ctaLabel: "kll",
        descriptionOne: "one",
        descriptionThree: "three",
        descriptionTwo: "2",
        heading: "heading",
      }}
      onPressCta={voidFunc}
    />
  ));
