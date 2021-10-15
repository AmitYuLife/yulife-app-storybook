import React from "react";
import { ScrollView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import ActivityList from "./activity-list";

storiesOf("ActivityList", module).add("all", () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <ActivityList steps={5802} cycling={23} mindfulness={"32 min"} />
    </ScrollView>
  );
});
