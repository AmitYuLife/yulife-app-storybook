import React from "react";
import { ScrollView, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Icon from "./index";

storiesOf("Icon", module).add("all", () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      {Object.keys(Icon).map((item) => (
        <>
          {React.createElement((Icon as any)[item])}
          <Pad />
        </>
      ))}
    </ScrollView>
  );
});

const Pad = ({ height = 24 }) => <View style={{ height }} />;
