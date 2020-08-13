import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import TextField from "./text-field";
import { withKnobs, text, number } from "@storybook/addon-knobs";

function voidFunc(): void {
  return null;
}

storiesOf("TextField", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => (
    <View style={{ width: number("width", 306) }}>
      <TextField placeholder={text("placeholder", "i be like placeholder")} onChange={voidFunc} />
      <TextField placeholder={text("placeholder", "i be like placeholder")} onChange={voidFunc} />
    </View>
  ));
