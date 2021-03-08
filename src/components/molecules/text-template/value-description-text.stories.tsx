import React from "react";
import { storiesOf } from "@storybook/react-native";
import TextTemplate from "./index";
import { ScrollView, View } from "react-native";

storiesOf("ValueDescription", module).add("default", () => {
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
      <View style={{ height: 120 }} />
      <TextTemplate.ValueDescription description="Total cover" value="6x salary" type="vertical" />
      <TextTemplate.ValueDescription description="x salary as lump sum" value="6" type="default" />
      <TextTemplate.ValueDescription description=" YuCoin Power" value="5" type="yucoin" style={{ marginTop: 8 }} />
      <View style={{ height: 120 }} />
    </ScrollView>
  );
});
