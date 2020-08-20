import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { SliderInput } from "./slider-input";

storiesOf("Slider Input", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "90%", alignSelf: "center" }}>
      {g()}
    </View>
  ))
  .add("default", () => {
    return <SliderInput leftLabel="this sucks" rightLabel="this rad" maxValue={10} />;
  });
