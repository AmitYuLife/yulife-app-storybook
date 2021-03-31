import React from "react";
import { storiesOf } from "@storybook/react-native";
import SwitchTab from "./switch-tab";
import { ScrollView, Text, View } from "react-native";

const Component = ({ title }: any) => (
  <View style={{ backgroundColor: title === "Active" ? "yellow" : "cyan" }}>
    <Text>{title}</Text>
  </View>
);

const testID = " testID";
const enabled = true;

const TABS = [
  {
    title: "YuMatter",
    component: <Component title="YuMatter" />,
    testID,
    enabled,
  },
  {
    title: "YuDoc",
    component: <Component title="YuDoc" />,
    testID,
    enabled,
  },
];

storiesOf("SwitchTab", module).add("default", () => {
  return (
    <ScrollView>
      <SwitchTab tabs={TABS} paddingHorizontal={30} />
    </ScrollView>
  );
});
