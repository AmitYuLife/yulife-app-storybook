import React from "react";
import { View, ScrollView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import TextField from "./text-field";
import { withKnobs, number } from "@storybook/addon-knobs";

function voidFunc(): void {
  return null;
}

storiesOf("TextField", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => (
    <ScrollView>
      <View style={{ width: number("width", 306) }}>
        <TextField placeholder="short" onChange={voidFunc} />
        <TextField placeholder="long placeholder" onChange={voidFunc} />
        <TextField placeholder="very very long placeholder" onChange={voidFunc} />
        <View style={{ width: 200 }}>
          <TextField placeholder="i be like placeholder" onChange={voidFunc} />
        </View>
      </View>
    </ScrollView>
  ));
