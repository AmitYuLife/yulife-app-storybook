import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { FibInputBirth } from "./fib-input-birth";
import { withProvider } from "@components/storybook/withProvider";

storiesOf("FibInput", module)
  .addDecorator(withProvider)
  .addDecorator((g: () => null) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eee" }}>{g()}</View>
  ))
  .add("birth", () => {
    return <FibInputBirth />;
  });
