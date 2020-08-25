import React, { useState } from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import TextInput from "./text-input";
import { withKnobs, number } from "@storybook/addon-knobs";

storiesOf("TextInput", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => <TextInputWrapper />);

function TextInputWrapper() {
  const [val, setVal] = useState("");

  return (
    <View style={{ width: number("width", 306) }}>
      <TextInput value={val} type="Text" placeholder="short" onChange={(newVal) => setVal(newVal)} />
    </View>
  );
}
