import React from "react";
import { ScrollView, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Icon from "./index";

storiesOf("Icon", module).add("_all", () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      {Object.keys(Icon).map((item) => (
        <View key={item}>
          {React.createElement((Icon as any)[item])}
          <Pad />
        </View>
      ))}
    </ScrollView>
  );
});

for (const icon of Object.keys(Icon)) {
  storiesOf("Icon", module)
    .addDecorator((g: () => JSX.Element) => {
      return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>;
    })
    .add(icon, () => {
      return React.createElement((Icon as any)[icon]);
    });
}

const Pad = ({ height = 24 }) => <View style={{ height }} />;
