import React from "react";
import { storiesOf } from "@storybook/react-native";
import Hyperlink from "./hyperlink";
import { ScrollView } from "react-native";

storiesOf("Hyperlink", module).add("default", () => {
  return (
    <ScrollView style={{ marginLeft: 40 }}>
      <Hyperlink title="title" url="https://yulife.com" />
    </ScrollView>
  );
});
