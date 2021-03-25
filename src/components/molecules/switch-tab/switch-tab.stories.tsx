import React from "react";
import { storiesOf } from "@storybook/react-native";
import SwitchTab from "./switch-tab";
import { ScrollView, Text, View } from "react-native";

const Component = ({ title }: any) => (
  <View style={{ backgroundColor: title === "Active" ? "yellow" : "cyan" }}>
    <Text>{title}</Text>
  </View>
);

const TABS = [
  {
    name: "Active",
    component: <Component title="Active" />,
  },
  {
    name: "Completed",
    component: <Component title="Completed" />,
  },
];

storiesOf("SwitchTab", module).add("default", () => {
  return (
    <ScrollView>
      <SwitchTab tabs={TABS} paddingHorizontal={14} />
    </ScrollView>
  );
});
